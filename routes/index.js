const express = require('express');
const { Pool } = require('pg');

const router = express.Router();

module.exports = router.get('/', (req, res) => {
	const query = 'SELECT row_to_json(fc) ' +
		'FROM (SELECT \'FeatureCollection\' As type, array_to_json(array_agg(f)) As features ' +
		'FROM (SELECT\'Feature\' As type, ' +
			'ST_AsGeoJSON(t.geom)::json As geometry, ' +
			`row_to_json((SELECT p FROM (SELECT ${req.query.fields}) As p)) As properties ` +
		`FROM ${req.query.table} As t) As f) As fc`;

	const pool = new Pool({
		/* local instance process.env.DATABASE_URL_LOCAL */
		connectionString: process.env.DATABASE_URL_LOCAL,
	})
		.on('error', (err) => {
			console.error('Connection Failed:\n', err);
			process.exit(-1);
		});

	pool.query(query, (err, rows) => {
		if (err) {
			console.error('Query Failed:\n', err);
		} else if (rows.rowCount > 0) {
			const geojson = rows.rows[0].row_to_json;
			delete geojson.features[0].properties.st_asgeojson;

			res.status(200).send(geojson);
		} else {
			console.error('No rows found:\n', query);
		}

		pool.end();
	});
});

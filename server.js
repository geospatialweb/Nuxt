require('dotenv').config();

const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const config = require('./config/server');
const routes = require('./routes');

express()
	.use(express.static(path.resolve(process.env.PUBLIC_ROOT)))
	.use('/api/geojson', routes)
	.use(morgan(config.morgan.format, {
		stream: fs.createWriteStream(path.resolve(config.morgan.logfile), {
			flags: config.morgan.flags,
		}),
	}))

	.set('env', process.env.NODE_ENV)
	.set('host', process.env.HOST || '0.0.0.0')
	.set('port', process.env.PORT || 80)

	.listen(process.env.PORT, process.env.HOST, (err) => {
		err ?
			console.error('Server Failed:\n', err) :
			console.log(`Active on http://localhost:${process.env.PORT} at ` +
                `${new Date().toDateString()} ${new Date().toTimeString()}`);
	});

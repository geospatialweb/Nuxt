/* eslint-disable-next-line import/no-extraneous-dependencies */
const consola = require('consola');
const express = require('express');
const { Builder, Nuxt } = require('nuxt');
const config = require('../nuxt.config.js');

config.dev = !(process.env.NODE_ENV === 'production');

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

async function start() {
	// Init Nuxt.js
	const nuxt = new Nuxt(config);

	// Build only in dev mode
	if (config.dev) {
		const builder = new Builder(nuxt);
		await builder.build();
	}

	// Give nuxt middleware to express
	app.use(nuxt.render);
	app.set('port', port);
	app.listen(port, host);

	consola.ready({
		badge: true,
		message: `Server listening on http://${host}:${port}`,
	});
}

start();

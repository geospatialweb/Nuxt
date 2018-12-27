const pkg = require('./package');

module.exports = {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: 'Geospatial Web',
		meta: [
			{ charset: 'utf-8' },
			{ hid: 'author', name: 'author', content: pkg.author },
			{ hid: 'description', name: 'description', content: pkg.description },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
		],
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },

	/*
	** Global CSS
	*/
	css: [
		'./styles/mapbox-gl.css',
		'./styles/styles.css',
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
	// Doc: https://github.com/nuxt-community/axios-module#usage
		'@nuxtjs/axios',
	],
	/*
	** Axios module configuration
	*/
	axios: {
	// See https://github.com/nuxt-community/axios-module#options
	},

	/*
	** Build configuration
	*/
	build: {
		postcss: {
			preset: {
				features: {
					customProperties: false,
				},
			},
		},
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
	},
};

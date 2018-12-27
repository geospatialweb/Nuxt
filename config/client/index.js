export default {
	header: {
		company: {
			name: 'Geospatial Web',
		},
		logo: {
			src: './logo.png',
		},
		repo: {
			name: 'GitHub Repository',
			src: 'https://github.com/geospatialweb/vue-map',
		},
		title: {
			name: 'Node | Express | Vue | Nuxt | Vuex | Mapbox GL | PostGIS | Docker',
		},
	},
	hillshade: {
		id: 'hillshading',
		/* index: where hillshading resides in 'outdoors-v10' style */
		index: 'waterway-river-canal-shadow',
		layer: {
			type: 'raster-dem',
			url: 'mapbox://mapbox.terrain-rgb',
		},
		source: 'dem',
		type: 'hillshade',
	},
	layerStyles: {
		biosphere: {
			name: 'biosphere',
			fields: 'name, description, ST_AsGeoJSON(geom)',
			layer: {
				id: 'biosphere',
				active: true,
				type: 'fill',
				source: {
					type: 'geojson',
				},
				layout: {
					visibility: 'visible',
				},
				paint: {
					'fill-color': '#090',
					'fill-opacity': 0.3,
					'fill-outline-color': '#000',
				},
			},
		},
		trails: {
			name: 'trails',
			fields: 'name, description, lat, lng, ST_AsGeoJSON(geom)',
			layer: {
				id: 'trails',
				active: false,
				type: 'line',
				source: {
					type: 'geojson',
				},
				layout: {
					visibility: 'none',
				},
				paint: {
					'line-color': '#900',
					'line-width': 2,
				},
			},
		},
	},
	layers: [
		{
			name: 'Satellite View',
			active: false,
			class: 'satellite',
			icon: 'satellite-icon',
			src: './satellite.png',
			height: '20',
			width: '20',
		},
		{
			name: 'Biosphere',
			active: true,
			class: 'biosphere',
			icon: 'biosphere-icon',
			src: './biosphere.png',
			height: '18',
			width: '18',
		},
		{
			name: 'Office',
			active: false,
			class: 'office',
			icon: 'office-icon',
			src: './office.png',
			height: '20',
			width: '18',
		},
		{
			name: 'Places',
			active: false,
			class: 'places',
			icon: 'places-icon',
			src: './places.png',
			height: '20',
			width: '18',
		},
		{
			name: 'Trails',
			active: false,
			class: 'trails',
			icon: 'trails-icon',
			src: './trails.png',
			height: '20',
			width: '18',
		},
		{
			name: 'Reset Map',
			class: 'reset',
		},
	],
	map: {
		accessToken: 'pk.eyJ1IjoiZ2Vvc3BhdGlhbHdlYiIsImEiOiJ6WGdOUFRvIn0.GoVRwZq5EfVsLNGyCqgZTw',
		controls: {
			navigationControl: {
				position: 'top-left',
			},
		},
		options: {
			center: [-76.3, 44.45],
			container: 'map',
			zoom: 9,
		},
		settings: {
			bearing: -0,
			bounds: {
				_ne: {
					lat: null,
					lng: null,
				},
				_sw: {
					lat: null,
					lng: null,
				},
			},
			center: [-76.3, 44.45],
			pitch: 0,
			zoom: 9,
		},
		styles: {
			// outdoors-v10 style without hillshading
			outdoors: {
				name: 'outdoors',
				active: true,
				type: 'vector',
				url: 'mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g',
			},
			satellite: {
				name: 'satellite',
				active: false,
				type: 'vector',
				url: 'mapbox://styles/mapbox/satellite-v9',
			},
		},
	},
	markers: {
		office: {
			name: 'office',
			active: false,
			fields: 'name, description, ST_AsGeoJSON(geom)',
			hidden: false,
		},
		places: {
			name: 'places',
			active: false,
			fields: 'name, description, ST_AsGeoJSON(geom)',
			hidden: false,
		},
		trails: {
			name: 'trails',
			active: false,
			fields: 'name, description, lat, lng, ST_AsGeoJSON(geom)',
			hidden: false,
		},
	},
	splashScreen: {
		active: true,
		class: 'splashScreen',
	},
	trails: [
		{
			name: 'Select Trail',
		},
		{
			name: 'Blue Mountain',
			active: false,
			center: [-76.04, 44.508],
			zoom: 11,
		},
		{
			name: 'Charleston Lake',
			active: false,
			center: [-76.04, 44.508],
			zoom: 11,
		},
		{
			name: 'Lemoine Point',
			active: false,
			center: [-76.61, 44.223],
			zoom: 13,
		},
		{
			name: 'Lyn Valley',
			active: false,
			center: [-75.75, 44.575],
			zoom: 11,
		},
		{
			name: 'Mac Johnson',
			active: false,
			center: [-75.75, 44.575],
			zoom: 11,
		},
		{
			name: 'Seeley\'s Bay',
			active: false,
			center: [-76.22, 44.485],
			zoom: 11,
		},
	],
};

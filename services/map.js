import mapboxgl from 'mapbox-gl';
import config from '../config/client/config.json';
import dataService from './data';
import ee from '../events';
import heatmapService from './heatmap';
import layerStylesService from './layerStyles';
import markerDisplayService from './markerDisplay';
import markersService from './markers';
import splashScreenService from './splashScreen';

export default {
	accessToken: config.map.accessToken,
	heatmapSettings: config.heatmap.settings,
	hillshade: config.hillshade,
	layers: config.layers,
	mapControls: config.map.controls,
	mapOptions: {
		center: config.map.options.center,
		container: config.map.options.container,
		style: config.map.styles.outdoors.url,
		minZoom: config.map.options.minZoom,
		maxZoom: config.map.options.maxZoom,
		zoom: config.map.options.zoom,
	},
	mapSettings: config.map.settings,
	mapStyle: config.map.styles.outdoors,
	mapStyles: config.map.styles,

	/* instantiate map instance */
	loadMap() {
		mapboxgl.accessToken = this.accessToken;
		this.map = new mapboxgl.Map(this.mapOptions)
			.addControl(new mapboxgl.NavigationControl(), this.mapControls.navigationControl.position)
			.on('load', () => {
				this.addHillShading();
				dataService.loadData();
			})
			.on('render', () => {
				ee.emit('getMapSettings');
				this.setMapSettings();
			})
			/* once layer styles and markers loaded, hide splash screen */
			.on('styledata', () => {
				if (layerStylesService.layerStyles.length === Object.keys(config.layerStyles).length &&
					markersService.markers.length === Object.keys(config.markers).length &&
					splashScreenService.splashScreen.active) {
					splashScreenService.hideSplashScreen();
				}
			});
	},

	/* add hillshading to 'outdoors' map style */
	addHillShading() {
		this.addLayerStyle(this.hillshade, this.hillshade.index);
	},

	addLayerStyle(layerStyle, index) {
		if (index) {
			this.map.addSource(layerStyle.source, layerStyle.layer);
		}

		this.map.addLayer(layerStyle, index);

		if (heatmapService.heatmap && !heatmapService.heatmap.active &&
				layerStyle.id === heatmapService.heatmap.id) {
			this.map.setLayoutProperty(layerStyle.id, 'visibility', 'none');
		}
	},

	displayHeatmap() {
		heatmapService.heatmap.active ?
			this.showHeatmap() :
			this.hideHeatmap();
	},

	showHeatmap() {
		ee.emit('setTrailsDisabled');
		ee.emit('getMapSettings');

		this.map.bearing = this.mapSettings.bearing;
		this.map.center = this.mapSettings.center;
		this.map.pitch = this.mapSettings.pitch;
		this.map.mapStyle = this.mapStyle;
		this.map.zoom = this.mapSettings.zoom;

		this.map.setBearing(this.heatmapSettings.bearing);
		this.map.setCenter(this.heatmapSettings.center);
		this.map.setPitch(this.heatmapSettings.pitch);
		this.map.setZoom(this.heatmapSettings.zoom);

		this.map.setLayoutProperty(heatmapService.heatmap.id, 'visibility', 'visible');
	},

	hideHeatmap() {
		ee.emit('setTrailsDisabled');
		heatmapService.reInitializeHeatmapParams();

		this.map.setBearing(this.map.bearing);
		this.map.setCenter(this.map.center);
		this.map.setPitch(this.map.pitch);
		this.map.setZoom(this.map.zoom);

		this.map.setLayoutProperty(heatmapService.heatmap.id, 'visibility', 'none');
	},

	setLayerStyleVisibility(layer) {
		layer.active ?
			this.map.setLayoutProperty(layer.class, 'visibility', 'visible') :
			this.map.setLayoutProperty(layer.class, 'visibility', 'none');
	},

	setMapSettings() {
		const settings = {
			bearing: this.map.getBearing(),
			bounds: this.map.getBounds(),
			center: this.map.getCenter(),
			pitch: this.map.getPitch(),
			zoom: this.map.getZoom(),
		};

		if (settings.bounds._ne.lat !== this.mapSettings.bounds._ne.lat ||
			settings.bounds._ne.lng !== this.mapSettings.bounds._ne.lng ||
			settings.bounds._sw.lat !== this.mapSettings.bounds._sw.lat ||
			settings.bounds._sw.lng !== this.mapSettings.bounds._sw.lng) {
			ee.emit('setMapSettings', settings);
		}
	},

	getMapStyle() {
		ee.emit('setMapStyle', this.mapStyle.name);
		ee.emit('getMapStyle');
	},

	setMapStyle() {
		this.getMapStyle();

		if (this.mapStyle.name === this.mapStyles.satellite.name) {
			this.map.removeLayer(this.hillshade.id);
		}

		this.map.setStyle(this.mapStyle.url);
		/* add hillshading, layer styles and active markers after 1.2 sec delay to set map style */
		setTimeout(() => {
			if (this.mapStyle.name === this.mapStyles.outdoors.name) {
				this.addHillShading();
			}

			heatmapService.addHeatmap();

			if (!heatmapService.heatmap.active) {
				this.map.setLayoutProperty(heatmapService.heatmap.id, 'visibility', 'none');
			}

			layerStylesService.layerStyles.map((layerStyle) => {
				this.addLayerStyle(layerStyle);

				if (layerStyle.layout.visibility === 'visible') {
					this.map.setLayoutProperty(layerStyle.id, 'visibility', 'visible');
				}
				return true;
			});

			markerDisplayService.showMarkers();
		}, 1200);
	},
};

import ee from '../events';
import heatmapService from './heatmap';
import layersService from './layers';
import layerStylesService from './layerStyles';
import mapService from './map';
import markersService from './markers';
import splashScreenService from './splashScreen';
import trailsService from './trails';

export default {
	setEvents() {
		ee.on('heatmapActive', () => heatmapService.heatmapActive());
		ee.on('selectLayer', (event, state) => layersService.selectLayer(event, state));
		ee.on('setLayerStyles', layerStyles => layerStylesService.setLayerStyles(layerStyles));
		ee.on('addLayerStyle', layerStyle => mapService.addLayerStyle(layerStyle));
		ee.on('loadMap', () => mapService.loadMap());
		ee.on('mapSettings', (mapSettings) => {
			mapService.mapSettings = mapSettings;
			return true;
		});
		ee.on('mapStyle', (mapStyle) => {
			mapService.mapStyle = mapStyle;
			return true;
		});
		ee.on('setMarker', (marker, data) => markersService.setMarker(marker, data));
		ee.on('setMarkers', (markers, markersHash) => markersService.setMarkers(markers, markersHash));
		ee.on('setSplashScreenActive', () => splashScreenService.setActive());
		ee.on('selectTrail', (event, state) => trailsService.selectTrail(event, state));
	},
};

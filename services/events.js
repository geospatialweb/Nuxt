import events from '../events';
import layersService from './layers';
import mapService from './map';
import markersService from './markers';
import trailsService from './trails';

export default {
	setEvents() {
		events.layers.addLayerStyle.on('addLayerStyle', layerStyle => mapService.addLayerStyle(layerStyle));
		events.layers.selectLayer.on('selectLayer', event => layersService.selectLayer(event));
		events.map.loadMap.on('loadMap', () => mapService.loadMap());
		events.mapSettings.mapSettings.on('mapSettings', (mapSettings) => {
			mapService.mapSettings = mapSettings;
			return true;
		});
		events.mapStyles.mapStyle.on('mapStyle', (mapStyle) => {
			mapService.mapStyle = mapStyle;
			return true;
		});
		events.markers.setMarker.on('setMarker', (marker, data) => markersService.setMarker(marker, data));
		events.trails.selectTrail.on('selectTrail', event => trailsService.selectTrail(event));
	},
};

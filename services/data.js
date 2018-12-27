import events from '../events';

export default {
	getData() {
		events.trails.getTrails.emit('getTrails');
		events.markers.getMarkers.emit('getMarkers');
		events.layerStyles.getLayerStyles.emit('getLayerStyles');
	},
};

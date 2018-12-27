import events from '../events';
import layers from '../store/layers';
import mapService from './map';
import markerDisplayService from './markerDisplay';

export default {
	selectLayer(event) {
		event.stopPropagation();

		const layer = event.target.classList[0];
		const i = layers.state.layers.findIndex(obj => obj.class === layer);

		if (Object.prototype.hasOwnProperty.call(layers.state.layers[i], 'active')) {
			events.layers.setLayerActive.emit('setLayerActive', i);
		}

		this.setLayer(layer, i);
	},

	setLayer(layer, i) {
		switch (layer) {
		case 'satellite':
			/* toggle between 'outdoors' and 'satellite' map styles (basemaps) */
			mapService.setMapStyle();
			/* hide active markers when changing map styles for aesthetic purposes */
			markerDisplayService.hideMarkers();
			/* show active markers after changing map styles for aesthetic purposes */
			setTimeout(() => markerDisplayService.showMarkers(), 1200);
			break;

		case 'biosphere':
		case 'trails':
			events.layerStyles.setLayerStyleActive.emit('setLayerStyleActive', layer);
			mapService.setLayerStyleVisibility(i);

			if (layers.state.layers[i].active && layer === 'trails') {
				/* add trails markers */
				markerDisplayService.addMarkers(layer);
			} else if (!layers.state.layers[i].active && layer === 'trails') {
				/* remove trails markers */
				markerDisplayService.removeMarkers(layer);
			}
			break;

		case 'office':
		case 'places':
			/* add or remove markers */
			layers.state.layers[i].active ?
				markerDisplayService.addMarkers(layer) :
				markerDisplayService.removeMarkers(layer);
			break;

		default:
			/* refresh app */
			window.location.reload(true);
		}
	},
};

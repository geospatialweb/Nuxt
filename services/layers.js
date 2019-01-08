import ee from '../events';
import heatmapService from './heatmap';
import mapService from './map';
import markerDisplayService from './markerDisplay';

export default {
	selectLayer(event, layers) {
		event.stopPropagation();

		const layer = event.target.classList[0];
		const i = layers.findIndex(obj => obj.class === layer);

		ee.emit('setLayerActive', i);
		this.setLayer(layer, layers, i);
	},

	setLayer(layer, layers, i) {
		switch (layer) {
		case 'satellite':
			/* hide active markers when changing map styles for aesthetic purposes */
			markerDisplayService.hideMarkers();
			/* toggle between 'outdoors' and 'satellite' map styles (basemaps) */
			mapService.setMapStyle();
			break;
		case 'biosphere':
		case 'trails':
			ee.emit('setLayerStyleActive', layer);
			mapService.setLayerStyleVisibility(layers[i]);

			if (layer === 'trails') {
				layers[i].active ?
					markerDisplayService.addMarkers(layer) :
					markerDisplayService.removeMarkers(layer);
			}
			break;
		case 'office':
		case 'places':
			layers[i].active ?
				markerDisplayService.addMarkers(layer) :
				markerDisplayService.removeMarkers(layer);
			break;
		case 'heatmap':
			/* display deck.gl 'HexagonLayer' heatmap layer */
			heatmapService.setActive();
			mapService.displayHeatmap();
			break;
		default:
		}
	},
};

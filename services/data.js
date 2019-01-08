import ee from '../events';
import heatmapService from './heatmap';

export default {
	loadData() {
		heatmapService.loadHeatmap();
		ee.emit('loadTrails');
		ee.emit('loadMarkers');
		ee.emit('loadLayerStyles');
	},
};

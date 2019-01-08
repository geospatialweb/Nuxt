import ee from '../events';
import mapService from './map';

export default {
	selectTrail(event, trails) {
		event.stopPropagation();
		const trail = event.target.value;
		const i = trails.findIndex(obj => obj.name === trail);
		/* exclude 'Select Trail' */
		if (i > 0) {
			ee.emit('setTrailActive', i);
			this.setTrail(trails, i);
		}
	},

	setTrail(trails, i) {
		mapService.map.flyTo({
			center: trails[i].center,
			zoom: trails[i].zoom,
		});
	},
};

import ee from '../events';
import mapService from './map';
import markersService from './markers';

export default {
	addMarkers(name) {
		ee.emit('setMarkersActive', name);
		markersService.markers[markersService.markersHash[name]]
			.map(marker => marker.addTo(mapService.map));
	},

	removeMarkers(name) {
		ee.emit('setMarkersActive', name);
		markersService.markers[markersService.markersHash[name]]
			.map(marker => marker.remove());
	},

	hideMarkers() {
		markersService.markers.map((marker) => {
			const name = marker[0].getElement().classList[0].replace('-marker', '');
			const el = document.querySelector(`div.${name}-marker`);

			if (el) {
				ee.emit('setMarkersHidden', name);
				this.removeMarkers(name);
			}
			return true;
		});
	},

	showMarkers() {
		markersService.markers.map((marker) => {
			if (marker.hidden) {
				const name = marker[0].getElement().classList[0].replace('-marker', '');
				ee.emit('setMarkersHidden', name);
				this.addMarkers(name);
			}
			return true;
		});
	},
};

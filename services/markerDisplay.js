import map from './map';
import events from '../events';
import markers from '../store/markers';

export default {
	addMarkers(layer) {
		markers.state.markers[markers.state.markersHash[layer]]
			.map((marker) => {
				events.markers.setMarkerActive.emit('setMarkerActive', marker);
				marker.addTo(map.map);
				return true;
			});
	},

	removeMarkers(layer) {
		markers.state.markers[markers.state.markersHash[layer]]
			.map((marker) => {
				events.markers.setMarkerActive.emit('setMarkerActive', marker);
				marker.remove();
				return true;
			});
	},

	hideMarkers() {
		markers.state.markers.map((marker) => {
			const name = marker[0].getElement().classList[0].replace('-marker', '');
			const el = document.querySelector(`div.${name}-marker`);

			if (el) {
				events.markers.setMarkerHidden.emit('setMarkerHidden', marker);
				this.removeMarkers(name);
			}

			return true;
		});
	},

	showMarkers() {
		markers.state.markers.map((marker) => {
			if (marker.hidden) {
				const name = marker[0].getElement().classList[0].replace('-marker', '');

				events.markers.setMarkerHidden.emit('setMarkerHidden', marker);
				this.addMarkers(name);
			}

			return true;
		});
	},
};

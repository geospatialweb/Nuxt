import mapboxgl from 'mapbox-gl';
import ee from '../events';
import mapService from './map';

export default {
	markers: [],
	setMarkers(markers, markersHash) {
		this.markers = markers;
		this.markersHash = markersHash;
	},
	/* create individual marker elements and add mouse event handlers */
	setMarker(marker, data) {
		const markers = [];
		markers.active = marker.active;
		markers.hidden = marker.hidden;

		data.features.map((feature) => {
			const el = document.createElement('div');
			const popup = new mapboxgl.Popup({
				closeButton: false,
				offset: 15,
			});

			el.className = `${marker.name}-marker`;
			el.addEventListener('mouseleave', () => {
				popup.remove();
			});

			switch (marker.name) {
			case 'office':
			case 'places':
				el.addEventListener('mouseenter', () => {
					popup
						.setLngLat(feature.geometry.coordinates)
						.setHTML(`<b>${feature.properties.id}</b><br>${feature.properties.description}`)
						.addTo(mapService.map);
				});
				markers.push(
					new mapboxgl.Marker(el)
						.setLngLat(feature.geometry.coordinates),
				);
				break;
			case 'trails':
				el.addEventListener('mouseenter', () => {
					popup
						.setLngLat([feature.properties.lng, feature.properties.lat])
						.setHTML(`<b>${feature.properties.id}</b><br>${feature.properties.description}`)
						.addTo(mapService.map);
				});
				markers.push(
					new mapboxgl.Marker(el)
						.setLngLat([feature.properties.lng, feature.properties.lat]),
				);
				break;
			default:
			}
			return true;
		});
		ee.emit('loadMarker', markers);
	},
};

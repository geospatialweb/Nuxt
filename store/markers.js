import { Axios } from 'axios-observable';
import config from '../config/client/config.json';
import ee from '../events';

const state = () => ({
	markers: [],
	markersHash: {},
});

const mutations = {
	createMarkersHash(state) {
		state.markers.map((marker, i) => {
			const name = marker[0].getElement().classList[0].replace('-marker', '');
			state.markersHash[name] = i;
			return true;
		});
	},
	loadMarker(state, marker) {
		state.markers.push(marker);
	},
	setActive(state, name) {
		state.markers[state.markersHash[name]].active = !state.markers[state.markersHash[name]].active;
	},
	setHidden(state, name) {
		state.markers[state.markersHash[name]].hidden = !state.markers[state.markersHash[name]].hidden;
	},
};

const actions = {
	loadMarkers({ commit, state }) {
		const { markers } = config;

		Object.keys(markers).map((key) => {
			const params = {
				fields: markers[key].fields,
				table: markers[key].name,
			};

			const subscription = Axios.get('/api/geojson', { params })
				.subscribe((res) => {
					res.data ?
						ee.emit('setMarker', markers[key], res.data) :
						console.error('Data Error:\n', res.data);
				},
				(err) => {
					console.error('Query Failed:\n', err.error);
				},
				() => {
					if (state.markers.length === Object.keys(markers).length) {
						commit('createMarkersHash');
						actions.setMarkers(state.markers, state.markersHash);
					}
					subscription.unsubscribe();
				});
			return true;
		});
	},

	loadMarker({ commit }, marker) {
		commit('loadMarker', marker);
	},

	setActive({ commit }, name) {
		commit('setActive', name);
	},

	setHidden({ commit }, name) {
		commit('setHidden', name);
	},

	setMarkers(markers, markersHash) {
		ee.emit('setMarkers', markers, markersHash);
	},
};

const markers = {
	actions,
	mutations,
	state,
};

export default markers;

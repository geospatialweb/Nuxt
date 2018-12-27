// import { Axios } from 'axios-observable';
// import config from '../config/client';
// import events from '../events';

const state = () => ({
	markers: [],
	markersHash: {},
});

const mutations = {
	CREATE_MARKERS_HASH(state) {
		state.markers.map((marker, i) => {
			const name = marker[0].getElement().classList[0].replace('-marker', '');

			state.markersHash[name] = i;
			return true;
		});
	},
	LOAD_MARKER(state, marker) {
		state.markers.push(marker);
	},
	SET_MARKER_ACTIVE(state, marker) {
		marker.active = !marker.active;
	},
	SET_MARKER_HIDDEN(state, marker) {
		marker.hidden = !marker.hidden;
	},
};

const actions = {
	getMarkers() {
	},

	loadMarker({ commit }, marker) {
		commit('LOAD_MARKER', marker);
	},

	setMarkerActive({ commit }, marker) {
		commit('SET_MARKER_ACTIVE', marker);
	},

	setMarkerHidden({ commit }, marker) {
		commit('SET_MARKER_HIDDEN', marker);
	},
};

const markersModule = {
	namespaced: true,
	state,
	mutations,
	actions,
};

export default markersModule;

import config from '../config/client/config.json';
import ee from '../events';

const state = () => ({
	layers: config.layers,
});

const mutations = {
	setActive(state, i) {
		state.layers[i].active = !state.layers[i].active;
	},
};

const actions = {
	selectLayer({ state }, event) {
		ee.emit('selectLayer', event, state.layers);
	},

	setActive({ commit }, i) {
		commit('setActive', i);
	},
};

const getters = {
	layers: state => state.layers,
};

const layers = {
	actions,
	getters,
	mutations,
	state,
};

export default layers;

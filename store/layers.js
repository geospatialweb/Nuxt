import config from '../config/client';
import events from '../events';

const state = () => ({
	layers: config.layers,
});

const mutations = {
	SET_LAYER_ACTIVE(state, i) {
		state.layers[i].active = !state.layers[i].active;
	},
};

const actions = {
	selectLayer(context, event) {
		events.layers.selectLayer.emit('selectLayer', event);
	},

	setLayerActive({ commit }, i) {
		commit('SET_LAYER_ACTIVE', i);
	},
};

const getters = {
	icons: state => state.layers.filter(layer => layer.icon),
	layers: state => state.layers,
};

const layersModule = {
	namespaced: true,
	state,
	actions,
	getters,
	mutations,
};

export default layersModule;

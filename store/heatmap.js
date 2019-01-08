import config from '../config/client/config.json';
import ee from '../events';

const state = () => ({
	heatmap: {
		active: config.heatmap.active,
		class: config.heatmap.id,
		coverage: config.heatmap.coverage,
		radius: config.heatmap.radius,
		upperPercentile: config.heatmap.upperPercentile,
	},
});

const mutations = {
	reInitializeParams(state) {
		config.heatmap.params.map((param) => {
			state.heatmap[param] = Number(config.heatmap[param]);
			return true;
		});
	},
	setActive(state) {
		state.heatmap.active = !state.heatmap.active;
		this.dispatch('heatmap/heatmapActive');
	},
	setParams(state, { param, value }) {
		state.heatmap[param] = value;
	},
};

const actions = {
	heatmapActive() {
		ee.emit('heatmapActive');
	},
	reInitializeParams({ commit }) {
		commit('reInitializeParams');
	},
	setActive({ commit }) {
		commit('setActive');
	},
	setParams({ commit }, { param, value }) {
		commit('setParams', { param, value });
	},
};

const getters = {
	heatmap: state => state.heatmap,
};

const heatmap = {
	actions,
	getters,
	mutations,
	state,
};

export default heatmap;

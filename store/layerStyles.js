// import { Axios } from 'axios-observable';
// import config from '../config/client';
import events from '../events';

const state = () => ({
	layerStyles: [],
	layerStylesHash: {},
});

const mutations = {
	CREATE_LAYERSTYLES_HASH(state) {
		state.layerStyles.map((layerStyle, i) => {
			state.layerStylesHash[layerStyle.id] = i;
			return true;
		});
	},
	LOAD_LAYERSTYLE(state, layerStyle) {
		state.layerStyles.push(layerStyle);
		events.layers.addLayerStyle.emit('addLayerStyle', layerStyle);
	},
	SET_LAYERSTYLE_ACTIVE(state, name) {
		const i = state.layerStylesHash[name];

		state.layerStyles[i].active = !state.layerStyles[i].active;

		state.layerStyles[i].active ?
			state.layerStyles[i].layout.visibility = 'visible' :
			state.layerStyles[i].layout.visibility = 'none';
	},
};

const actions = {
	getLayerStyles() {
	},
	setLayerStyleActive({ commit }, name) {
		commit('SET_LAYERSTYLE_ACTIVE', name);
	},
};

const layerStylesModule = {
	namespaced: true,
	state,
	mutations,
	actions,
};

export default layerStylesModule;

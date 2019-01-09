import config from '../config/client/config.json';
import ee from '../events';

const state = () => ({
	mapStyles: config.map.styles,
});

const mutations = {
	setActive(state, name) {
		state.mapStyles[name].active = !state.mapStyles[name].active;
	},
};

const actions = {
	getStyle({ state }) {
		const mapStyle = Object.keys(state.mapStyles).find(key => state.mapStyles[key].active);
		ee.emit('mapStyle', state.mapStyles[mapStyle]);
	},
	setStyle({ commit, state }, name) {
		commit('setActive', name);
		let mapStyleName;
		name === state.mapStyles.outdoors.name ?
			mapStyleName = state.mapStyles.satellite.name :
			mapStyleName = state.mapStyles.outdoors.name;
		commit('setActive', mapStyleName);
	},
};

const mapStyles = {
	actions,
	mutations,
	state,
};

export default mapStyles;

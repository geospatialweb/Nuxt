import config from '../config/client/config.json';
import ee from '../events';

const state = () => ({
	mapSettings: config.map.settings,
});

const mutations = {
	setSettings(state, mapSettings) {
		state.mapSettings = mapSettings;
	},
};

const actions = {
	getSettings({ state }) {
		ee.emit('mapSettings', state.mapSettings);
	},
	setSettings({ commit }, mapSettings) {
		commit('setSettings', mapSettings);
	},
};

const mapSettings = {
	actions,
	mutations,
	state,
};

export default mapSettings;

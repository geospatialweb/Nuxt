import config from '../config/client/config.json';
import ee from '../events';

const state = () => ({
	splashScreen: config.splashScreen,
});

const mutations = {
	setActive(state) {
		state.splashScreen.active = !state.splashScreen.active;
		this.dispatch('splashScreen/setSplashScreenActive');
	},
};

const actions = {
	setActive({ commit }) {
		commit('setActive');
	},
	setSplashScreenActive() {
		ee.emit('setSplashScreenActive');
	},
};

const getters = {
	splashScreen: state => state.splashScreen,
};

const splashScreen = {
	actions,
	getters,
	mutations,
	state,
};

export default splashScreen;

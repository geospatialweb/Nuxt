import config from '../config/client';

const state = () => ({
	splashScreen: config.splashScreen,
});

const mutations = {
	SET_SPLASHSCREEN_ACTIVE(state) {
		state.splashScreen.active = !state.splashScreen.active;
	},
};

const actions = {
	setSplashScreenActive({ commit }) {
		commit('SET_SPLASHSCREEN_ACTIVE');
	},
};

const getters = {
	splashScreen: state => state.splashScreen,
};

const splashScreenModule = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};

export default splashScreenModule;

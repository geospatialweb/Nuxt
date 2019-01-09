import config from '../config/client/config.json';
import ee from '../events';

const state = () => ({
	disabled: false,
	trails: [],
});

const mutations = {
	loadTrails(state, trails) {
		trails.map(trail => state.trails.push(trail));
	},
	setActive(state, idx) {
		state.trails.map((trail, i) => {
			i === idx ?
				state.trails[i].active = true :
				state.trails[i].active = false;
			return true;
		});
	},

	setDisabled(state) {
		state.disabled = !state.disabled;
	},
};

const actions = {
	loadTrails({ commit }) {
		commit('loadTrails', config.trails);
	},

	selectTrail({ state }, event) {
		ee.emit('selectTrail', event, state.trails);
	},

	setActive({ commit }, i) {
		commit('setActive', i);
	},

	setDisabled({ commit }) {
		commit('setDisabled');
	},
};

const getters = {
	disabled: state => state.disabled,
	trails: state => state.trails,
};


const trailsModule = {
	actions,
	getters,
	mutations,
	state,
};

export default trailsModule;

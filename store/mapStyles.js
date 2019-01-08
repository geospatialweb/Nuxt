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
	getStyle() {
		const mapStyle = Object.keys(this.state.mapStyles.mapStyles)
			.find(key => this.state.mapStyles.mapStyles[key].active);
		ee.emit('mapStyleActive', this.state.mapStyles.mapStyles[mapStyle]);
	},
	setStyle({ commit }, name) {
		commit('setActive', name);
		let mapStyleName;
		name === this.state.mapStyles.mapStyles.outdoors.name ?
			mapStyleName = this.state.mapStyles.mapStyles.satellite.name :
			mapStyleName = this.state.mapStyles.mapStyles.outdoors.name;
		commit('setActive', mapStyleName);
	},
};

const mapStyles = {
	actions,
	mutations,
	state,
};

export default mapStyles;

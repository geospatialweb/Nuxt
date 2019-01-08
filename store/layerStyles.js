import { Axios } from 'axios-observable';
import config from '../config/client/config.json';
import ee from '../events';

const state = () => ({
	layerStyles: [],
});

const mutations = {
	loadLayerStyle(state, layerStyle) {
		state.layerStyles.push(layerStyle);
	},
	setActive(state, name) {
		const i = state.layerStyles.findIndex(obj => obj.id === name);
		state.layerStyles[i].active = !state.layerStyles[i].active;
		state.layerStyles[i].active ?
			state.layerStyles[i].layout.visibility = 'visible' :
			state.layerStyles[i].layout.visibility = 'none';
	},
};

const actions = {
	addLayerStyles(layerStyles) {
		layerStyles.map(layerStyle => ee.emit('addLayerStyle', layerStyle));
		actions.setLayerStyles(layerStyles);
	},
	loadLayerStyles({ commit }) {
		const { layerStyles } = config;

		Object.keys(layerStyles).map((key) => {
			const params = {
				fields: layerStyles[key].fields,
				table: layerStyles[key].layer.id,
			};

			const subscription = Axios.get('/api/geojson', { params })
				.subscribe((res) => {
					if (res.data) {
						const layerStyle = layerStyles[key].layer;
						layerStyle.source.data = res.data;

						commit('loadLayerStyle', layerStyle);
					} else {
						console.error('Data Error:\n', res.data);
					}
				},
				(err) => {
					console.error('Query Failed:\n', err.error);
				},
				() => {
					if (this.state.layerStyles.layerStyles.length === Object.keys(layerStyles).length) {
						actions.addLayerStyles(this.state.layerStyles.layerStyles);
					}

					subscription.unsubscribe();
				});
			return true;
		});
	},
	setActive({ commit }, name) {
		commit('setActive', name);
	},
	setLayerStyles(layerStyles) {
		ee.emit('setLayerStyles', layerStyles);
	},
};

const layerStyles = {
	actions,
	mutations,
	state,
};

export default layerStyles;

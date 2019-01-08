<template>
	<div class='mapContainer'>
		<div :id='container'></div>
		<SplashScreen />
		<Heatmap />
		<Layers />
		<Trails />
	</div>
</template>

<script>
import Heatmap from './Heatmap.vue';
import Layers from './Layers.vue';
import SplashScreen from './SplashScreen.vue';
import Trails from './Trails.vue';
import config from '../config/client/config.json';

export default {
	name: 'Map',
	data: () => ({
		container: config.map.options.container,
	}),
	components: {
		Heatmap,
		Layers,
		SplashScreen,
		Trails,
	},
};
</script>

<style lang='scss' scoped>
div.mapContainer,
div#map {
	position: absolute;
	height: 100%;
	width: 100%;
}
</style>

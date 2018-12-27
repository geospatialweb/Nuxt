<template>
	<div class='mapContainer'>
		<div :id='container'></div>
		<!-- <SplashScreen /> -->
		<!-- <Layers /> -->
		<!-- <Trails /> -->
	</div>
</template>

<script>
// import Layers from './Layers.vue';
import config from '../config/client';

export default {
	name: 'Map',
	data() {
		return {
			container: config.map.options.container,
		};
	},
	components: {
		// Layers,
		// SplashScreen,
		// Trails,
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

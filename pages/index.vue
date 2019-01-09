<template>
	<div>
		<Header />
		<Map />
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import Map from '../components/Map.vue';
import ee from '../events';

export default {
	name: 'App',
	components: {
		Header,
		Map,
	},
	mounted() {
		/* eslint-disable global-require */
		require('../services/observables').default.setLocalObservables();
		require('../services/observables').default.setStoreObservables(this.$store);
		ee.emit('loadMap');
	},
};
</script>

<style lang="scss">
div.office-marker {
	background-image: url('../assets/office.png');
	cursor: pointer;
	height: 25px;
	width: 22px;
}

div.places-marker {
	background-image: url('../assets/places.png');
	cursor: pointer;
	height: 25px;
	width: 22px;
}

div.trails-marker {
	background-image: url('../assets/trails.png');
	cursor: pointer;
	height: 25px;
	width: 22px;
}
</style>

<template>
	<div :class='[splashScreen.class, {active: splashScreen.active}]'></div>
</template>

<script>
import { mapGetters } from 'nuxt';

export default {
	name: 'SplashScreen',
	computed: {
		...mapGetters({ splashScreen: 'splashScreen/splashScreen' }),
	},
};
</script>

<style lang='scss' scoped>
div.splashScreen{
	position: absolute;
	background: rgba(0,0,0,.5);
	visibility: hidden;
	z-index: 2;
	height: 100%;
	width: 100%;
}

div.splashScreen.active {
	visibility: visible;
}
</style>

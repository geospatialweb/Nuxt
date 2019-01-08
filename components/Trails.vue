<template>
	<select class='trails' :disabled='disabled' @change='selectTrail'>
		<option v-for='trail in trails' :key='trail.name'>{{ trail.name }}</option>
	</select>
</template>

<script>
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'Trails',
	computed: {
		...mapGetters({
			disabled: 'trails/disabled',
			trails: 'trails/trails',
		}),
	},
	methods: {
		...mapActions({ selectTrail: 'trails/selectTrail' }),
	},
};
</script>

<style lang='scss' scoped>
select.trails {
	position: absolute;
	border-style: solid;
	font-family: 'Roboto', sans-serif;
	left: 10px;
	top: 320px;
	width: 126px;
}
</style>

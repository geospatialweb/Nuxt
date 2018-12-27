<template>
	<select class='selectTrail' @change='selectTrail'>
		<option v-for='trail in trails' :key='trail.name'>{{ trail.name }}</option>
	</select>
</template>

<script>
import { mapActions, mapGetters } from 'nuxt';

export default {
	name: 'Trails',
	computed: {
		...mapGetters({ trails: 'trails/trails' }),
	},
	methods: {
		...mapActions({ selectTrail: 'trails/selectTrail' }),
	},
};
</script>

<style lang='scss' scoped>
select.selectTrail {
	position: absolute;
	border-style: none;
	font-family: 'Roboto', sans-serif;
	left: 10px;
	top: 310px;
	width: 110px;
}
</style>

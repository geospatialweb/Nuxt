<template>
	<div>
		<ul class='layers'>
			<LayerElements v-for='layer in layers' :key='layer.class' :el='layer' @click='selectLayer' />
		</ul>

		<LayerIcons v-for='layer in layers' :key='layer.class' :icon='layer' @click='selectLayer' />
	</div>
</template>

<script>
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mapActions, mapGetters } from 'vuex';
import LayerElements from './LayerElements.vue';
import LayerIcons from './LayerIcons.vue';

export default {
	name: 'Layers',
	components: {
		LayerElements,
		LayerIcons,
	},
	computed: {
		...mapGetters({ layers: 'layers/layers' }),
	},
	methods: {
		...mapActions({ selectLayer: 'layers/selectLayer' }),
	},
};
</script>

<style lang='scss'>
div {
	ul.layers {
		position: absolute;
		left: 10px;
		top: 120px;
	}
}
</style>

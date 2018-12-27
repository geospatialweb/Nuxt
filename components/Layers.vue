<template>
	<div>
		<ul class='layers'>
			<LayerElements v-for='layer in layers' :key='layer.class' :el='layer' @click='selectLayer' />
		</ul>

		<LayerIcons v-for='icon in icons' :key='icon.class' :icon='icon' @click='selectLayer' />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'nuxt';
import LayerElements from './LayerElements.vue';
import LayerIcons from './LayerIcons.vue';

export default {
	name: 'Layers',
	components: {
		LayerElements,
		LayerIcons,
	},
	computed: {
		...mapGetters({ icons: 'layers/icons', layers: 'layers/layers' }),
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
		margin: 0;
		padding: 0;
		list-style-type: none;
		left: 10px;
		top: 120px;
	}
}
</style>

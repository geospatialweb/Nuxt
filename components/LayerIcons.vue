<template>
	<div :class='icon.icon' :height='icon.height' :width='icon.width'>
		<img :class='icon.class' :src='icon.src' :height='icon.height' :width='icon.width'
			@click='selectLayer'>
	</div>
</template>

<script>
import { mapActions } from 'nuxt';

export default {
	name: 'LayerIcons',
	props: ['icon'],
	methods: {
		...mapActions({ selectLayer: 'layers/selectLayer' }),
	},
};
</script>

<style lang='scss' scoped>
div {
	div.satellite-icon {
		position: absolute;
		cursor: pointer;
		left: 21px;
		top: 126px;
	}

	div.biosphere-icon {
		position: absolute;
		cursor: pointer;
		left: 22px;
		top: 155px;
	}

	div.office-icon {
		position: absolute;
		cursor: pointer;
		left: 22px;
		top: 183px;
	}

	div.places-icon {
		position: absolute;
		cursor: pointer;
		left: 22px;
		top:212px;
	}

	div.trails-icon {
		position: absolute;
		cursor: pointer;
		left: 22px;
		top: 241px;
	}
}
</style>

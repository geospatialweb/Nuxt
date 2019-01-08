<template>
	<div :class='icon.icon' :height='icon.height' :width='icon.width'>
		<img :class='icon.class' :src='icon.src' :height='icon.height' :width='icon.width'
			@click='selectLayer'>
	</div>
</template>

<script>
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mapActions } from 'vuex';

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
		left: 22px;
		top: 125px;
	}

	div.biosphere-icon {
		position: absolute;
		cursor: pointer;
		left: 23px;
		top: 158px;
	}

	div.office-icon {
		position: absolute;
		cursor: pointer;
		left: 22px;
		top: 186px;
	}

	div.places-icon {
		position: absolute;
		cursor: pointer;
		left: 22px;
		top: 216px;
	}

	div.trails-icon {
		position: absolute;
		cursor: pointer;
		left: 22px;
		top: 246px;
	}

	div.uber-icon {
		position: absolute;
		cursor: pointer;
		left: 22px;
		top: 277px;
	}
}
</style>

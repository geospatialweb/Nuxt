<template>
	<div :class='[heatmap.class, { active: heatmap.active }]'>
		<div>
			<label>Coverage</label>
			<input id='coverage' type='range' min='0' max='1' step='0.1'
				:value='heatmap.coverage' />
			<span>{{ parseFloat(heatmap.coverage).toFixed(1) }}</span>
		</div>
		<br>
		<div>
			<label>Radius</label>
			<input id='radius' type='range' min='1000' max='5000' step='500'
				:value='heatmap.radius' />
			<span>{{ heatmap.radius }}</span>
		</div>
		<br>
		<div>
			<label>Upper Percentile</label>
			<input id='upperPercentile' type='range' min='80' max='100' step='1'
				:value='heatmap.upperPercentile' />
			<span>{{ heatmap.upperPercentile }}</span>
		</div>
	</div>
</template>

<script>
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mapGetters } from 'vuex';

export default {
	name: 'Heatmap',
	computed: {
		...mapGetters({ heatmap: 'heatmap/heatmap' }),
	},
};
</script>

<style lang='scss' scoped>
@mixin border-radius($radius) {
	border-radius: $radius;
	-webkit-border-radius: $radius;
	-moz-border-radius: $radius;
	-ms-border-radius: $radius;
}

div.heatmap {
	position: absolute;
	padding: 10px 15px;
	background: rgb(160,150,140);
	border: 1px solid rgb(187,187,187);
	@include border-radius(4px);
	color: rgb(60,75,90);
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-size: 0.95em;
	visibility: hidden;
	right: 10px;
	top: 10px;
	width: 130px;

	div input,
	div label,
	div span {
		cursor: pointer;
	}

	div input {
		width: 130px;
	}

	div label {
		line-height: 1.4;
	}

	div span {
		color: #fff;
		line-height: 1.4;
	}
}

div.heatmap.active {
	visibility: visible;
}
</style>

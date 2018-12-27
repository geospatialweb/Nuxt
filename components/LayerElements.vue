<template>
	<li>
		<div :class='[el.class, {active: el.active}]' @click='selectLayer'>{{ el.name }}</div>
	</li>
</template>

<script>
import { mapActions } from 'nuxt';

export default {
	name: 'LayerElements',
	props: ['el'],
	methods: {
		...mapActions({ selectLayer: 'layers/selectLayer' }),
	},
};
</script>

<style lang='scss' scoped>
$active-background-color:  rgb(120,110,100);
$hover-background-color:   rgb(140,130,120);
$primary-background-color: rgb(160,150,140);

$active-text-color:  rgb(216,216,216);
$primary-text-color: rgb(60,75,90);

@mixin border-radius($radius) {
	border-radius: $radius;
	-webkit-border-radius: $radius;
	-moz-border-radius: $radius;
	-ms-border-radius: $radius;
}

div ul.layers li {
	&:first-child div {
		@include border-radius(3px 3px 0 0);
	}

	&:last-child div {
		@include border-radius(0 0 3px 3px);
		border-bottom-width: 1px;
	}

	div {
		display: block;
		padding: 5px 0 5px 40px;
		background: $primary-background-color;
		border: 1px solid rgb(187,187,187);
		border-bottom-width: 0;
		color: $primary-text-color;
		cursor: pointer;
		font-family: 'Roboto', sans-serif;
		font-size: 0.95em;
		text-decoration: none;
		width: 95px;

		&:hover {
			background: $hover-background-color;
		}
	}

	div.active {
		background: $active-background-color;
		color: $active-text-color;
	}
}
</style>

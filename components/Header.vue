<template>
	<div class='headerContainer'>
		<img class='logo' :src='header.logo.src' :alt='header.company.name'>
		<div class='company'>{{ header.company.name }}</div>
		<div class='title'>{{ header.title.name }}</div>
		<a class='repo' :href='header.repo.src' target='_blank'>{{ header.repo.name }}</a>
	</div>
</template>

<script>
import config from '../config/client';

export default {
	name: 'Header',
	data() {
		return {
			header: config.header,
		};
	},
};
</script>

<style lang='scss' scoped>
div.headerContainer {
	background: rgb(120,110,100);
	font-family: 'Orbitron', sans-serif;
	height: 45px;
	width: 100%;

	img.logo {
		margin: 0;
		padding: 6px 0 0 8px;
		float: left;
		height: 35px;
		width: 35x;
	}

	div.company {
		padding: 10px 0 0 8px;
		float: left;
		font-size: 1.3em;
	}

	div.title {
		padding: 14px 0 0 20px;
		color: rgb(160,0,0);
		float: left;
		font-size: 1em;
	}

	a.repo {
		padding: 13px 10px 0 0;
		color: rgb(0,0,0);
		float: right;
		font-size: .9em;
	}
}
</style>

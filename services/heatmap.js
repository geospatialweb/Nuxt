/*
   URL: https://gist.github.com/Pessimistress/1a4f3f5eb3b882ab4dd29f8ac122a7be
   Title: deck.gl + Mapbox HexagonLayer Example
   Author: Xiaoji Chen (@pessimistress)
   Data Source: https://data.gov.uk
*/
import * as d3 from 'd3';
import { HexagonLayer } from '@deck.gl/layers';
import { MapboxLayer } from '@deck.gl/mapbox';
import config from '../config/client/config.json';
import ee from '../events';
import mapService from './map';

export default {
	params: config.heatmap.params,
	addHeatmap() {
		mapService.addLayerStyle(this.heatmap);
	},
	setActive() {
		ee.emit('setHeatmapActive');
	},
	heatmapActive() {
		this.heatmap.props.active = !this.heatmap.props.active;
	},
	loadHeatmap() {
		this.heatmap = new MapboxLayer({
			type: HexagonLayer,
			id: config.heatmap.id,
			active: config.heatmap.active,
			colorRange: config.heatmap.colour_range,
			coverage: Number(config.heatmap.coverage),
			data: d3.csv(config.heatmap.data_url),
			elevationRange: config.heatmap.elevationRange,
			elevationScale: config.heatmap.elevationScale,
			extruded: config.heatmap.extruded,
			getPosition: d => [Number(d.lng), Number(d.lat)],
			opacity: config.heatmap.opacity,
			radius: Number(config.heatmap.radius),
			upperPercentile: Number(config.heatmap.upperPercentile),
		});

		this.addHeatmap();
		this.params.map((param) => {
			document.getElementById(param).oninput = (event) => {
				const { value } = event.target;
				ee.emit('setHeatmapParams', param, value);
				this.heatmap.setProps({ [param]: Number(value) });
			};
			return true;
		});
	},
	reInitializeHeatmapParams() {
		ee.emit('reInitializeHeatmapParams');
		this.params.map((param) => {
			this.heatmap.setProps({ [param]: Number(config.heatmap[param]) });
			return true;
		});
	},
};

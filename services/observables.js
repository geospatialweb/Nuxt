import { fromEvent } from 'rxjs';
import ee from '../events';
import heatmapService from './heatmap';
import layersService from './layers';
import layerStylesService from './layerStyles';
import mapService from './map';
import markersService from './markers';
import splashScreenService from './splashScreen';
import trailsService from './trails';

export default {
	setLocalObservables() {
		const heatmapActive =
			fromEvent(ee, 'heatmapActive')
				.subscribe(() => {
					heatmapService.heatmapActive();
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					heatmapActive.unsubscribe();
				});

		const selectLayer =
			fromEvent(ee, 'selectLayer')
				.subscribe((data) => {
					layersService.selectLayer(data[0], data[1]);
				},

				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					selectLayer.unsubscribe();
				});

		const setLayerStyles =
			fromEvent(ee, 'setLayerStyles')
				.subscribe((data) => {
					layerStylesService.setLayerStyles(data);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setLayerStyles.unsubscribe();
				});

		const addLayerStyle =
			fromEvent(ee, 'addLayerStyle')
				.subscribe((data) => {
					mapService.addLayerStyle(data);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					addLayerStyle.unsubscribe();
				});

		const loadMap =
			fromEvent(ee, 'loadMap')
				.subscribe(() => {
					mapService.loadMap();
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					loadMap.unsubscribe();
				});

		const mapSettings =
			fromEvent(ee, 'mapSettings')
				.subscribe((data) => {
					mapService.mapSettings = data;
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					mapSettings.unsubscribe();
				});

		const mapStyle =
			fromEvent(ee, 'mapStyle')
				.subscribe((data) => {
					mapService.mapStyle = data;
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					mapStyle.unsubscribe();
				});

		const setMarker =
			fromEvent(ee, 'setMarker')
				.subscribe((data) => {
					markersService.setMarker(data[0], data[1]);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setMarker.unsubscribe();
				});

		const setMarkers =
			fromEvent(ee, 'setMarkers')
				.subscribe((data) => {
					markersService.setMarkers(data[0], data[1]);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setMarkers.unsubscribe();
				});

		const setSplashScreenActive =
			fromEvent(ee, 'setSplashScreenActive')
				.subscribe(() => {
					splashScreenService.setActive();
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setSplashScreenActive.unsubscribe();
				});

		const selectTrail =
			fromEvent(ee, 'selectTrail')
				.subscribe((data) => {
					trailsService.selectTrail(data[0], data[1]);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					selectTrail.unsubscribe();
				});
	},
	setStoreObservables($store) {
		const reInitializeHeatmapParams =
			fromEvent(ee, 'reInitializeHeatmapParams')
				.subscribe(() => {
					$store.dispatch('heatmap/reInitializeParams');
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					reInitializeHeatmapParams.unsubscribe();
				});

		const setHeatmapActive =
			fromEvent(ee, 'setHeatmapActive')
				.subscribe(() => {
					$store.dispatch('heatmap/setActive');
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setHeatmapActive.unsubscribe();
				});

		const setHeatmapParams =
			fromEvent(ee, 'setHeatmapParams')
				.subscribe((data) => {
					$store.dispatch('heatmap/setParams', [data[0], data[1]]);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setHeatmapParams.unsubscribe();
				});

		const setLayerActive =
			fromEvent(ee, 'setLayerActive')
				.subscribe((data) => {
					$store.dispatch('layers/setActive', data);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setLayerActive.unsubscribe();
				});

		const loadLayerStyles =
			fromEvent(ee, 'loadLayerStyles')
				.subscribe(() => {
					$store.dispatch('layerStyles/loadLayerStyles');
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					loadLayerStyles.unsubscribe();
				});

		const setLayerStyleActive =
			fromEvent(ee, 'setLayerStyleActive')
				.subscribe((data) => {
					$store.dispatch('layerStyles/setActive', data);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setLayerStyleActive.unsubscribe();
				});

		const getMapSettings =
			fromEvent(ee, 'getMapSettings')
				.subscribe(() => {
					$store.dispatch('mapSettings/getSettings');
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					getMapSettings.unsubscribe();
				});

		const setMapSettings =
			fromEvent(ee, 'setMapSettings')
				.subscribe((data) => {
					$store.dispatch('mapSettings/setSettings', data);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setMapSettings.unsubscribe();
				});

		const getMapStyle =
			fromEvent(ee, 'getMapStyle')
				.subscribe(() => {
					$store.dispatch('mapStyles/getStyle');
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					getMapStyle.unsubscribe();
				});

		const setMapStyle =
			fromEvent(ee, 'setMapStyle')
				.subscribe((data) => {
					$store.dispatch('mapStyles/setStyle', data);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setMapStyle.unsubscribe();
				});

		const loadMarker =
			fromEvent(ee, 'loadMarker')
				.subscribe((data) => {
					$store.dispatch('markers/loadMarker', data);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					loadMarker.unsubscribe();
				});

		const loadMarkers =
			fromEvent(ee, 'loadMarkers')
				.subscribe(() => {
					$store.dispatch('markers/loadMarkers');
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					loadMarkers.unsubscribe();
				});

		const setMarkersActive =
			fromEvent(ee, 'setMarkersActive')
				.subscribe((data) => {
					$store.dispatch('markers/setActive', data);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setMarkersActive.unsubscribe();
				});

		const setMarkersHidden =
			fromEvent(ee, 'setMarkersHidden')
				.subscribe((data) => {
					$store.dispatch('markers/setHidden', data);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setMarkersHidden.unsubscribe();
				});

		const hideSplashScreen =
			fromEvent(ee, 'hideSplashScreen')
				.subscribe(() => {
					$store.dispatch('splashScreen/setActive');
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					hideSplashScreen.unsubscribe();
				});

		const loadTrails =
			fromEvent(ee, 'loadTrails')
				.subscribe(() => {
					$store.dispatch('trails/loadTrails');
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					loadTrails.unsubscribe();
				});

		const setTrailActive =
			fromEvent(ee, 'setTrailActive')
				.subscribe((data) => {
					$store.dispatch('trails/setActive', data);
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setTrailActive.unsubscribe();
				});


		const setTrailsDisabled =
			fromEvent(ee, 'setTrailsDisabled')
				.subscribe(() => {
					$store.dispatch('trails/setDisabled');
				},
				(err) => {
					console.error('Observable Failed:\n', err.error);
				},
				() => {
					setTrailsDisabled.unsubscribe();
				});
	},
};

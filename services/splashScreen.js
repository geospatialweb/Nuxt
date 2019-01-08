import config from '../config/client/config.json';
import ee from '../events';

export default {
	splashScreen: {
		active: config.splashScreen.active,
	},
	hideSplashScreen() {
		ee.emit('hideSplashScreen');
	},
	setActive() {
		this.splashScreen.active = !this.splashScreen.active;
	},
};

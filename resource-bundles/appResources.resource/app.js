define(
	['angular','angular-couch-potato', 'angular-ui-router', 'angular-animate'],
	function(angular, couchPotato) {
		console.log('in app.js');
		var app = angular.module('app', ['scs.couch-potato', 'ui.router', 'ngAnimate']);

		couchPotato.configureApp(app);
		return app;
	}
);
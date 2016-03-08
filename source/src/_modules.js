(function(){
	'use strict';

	angular.module('maesonApp', [
		'ngRoute',
		'ngResource',
		'ui.bootstrap',
		'home',
		'about',
		'services',
		'contact'
	]);

	angular.module('Common.services', ['ngResource', 'toaster']);
}());
(function() {
    'use strict';

    angular
        .module('home', [
 			'ui.bootstrap'
        ]);

    angular.module('home')
    	.config(function($routeProvider){
    		$routeProvider
    			.when('/', {
                    title: 'Home Page',
    				templateUrl: 'home/home.html',
    				controller: 'HomeCtrl',
                    controllerAs: 'self'
    			});
    	});

})();
(function() {
    'use strict';

    angular
        .module('about', [
 			
        ]);

    angular.module('about')
    	.config(function($routeProvider){
    		$routeProvider
    			.when('/about', {
                    title: 'About',
    				templateUrl: 'about/about.html',
    				controller: 'AboutCtrl',
                    controllerAs: 'self'
    			});
    	});

})();
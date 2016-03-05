(function() {
    'use strict';

    angular
        .module('services', [
 			
        ]);

    angular.module('services')
    	.config(function($routeProvider){
    		$routeProvider
    			.when('/services', {
                    title: 'Services',
    				templateUrl: 'services/services.html',
    				controller: 'ServicesCtrl',
                    controllerAs: 'self'
    			});
    	});

})();
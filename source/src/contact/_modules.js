(function() {
    'use strict';

    angular
        .module('contact', [
            'ngResource',
 			'Common.services'
        ]);

    angular.module('contact')
    	.config(function($routeProvider){
    		$routeProvider
    			.when('/contact', {
                    title: 'Contact',
    				templateUrl: 'contact/contact.html',
    				controller: 'ContactCtrl',
                    controllerAs: 'self'
    			});
    	});

})();
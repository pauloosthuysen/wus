(function() {
    'use strict';

    angular
        .module('gallery', [
 			
        ]);

    angular.module('gallery')
    	.config(function($routeProvider){
    		$routeProvider
    			.when('/gallery', {
                    title: 'Gallery',
    				templateUrl: 'gallery/gallery.html',
    				controller: 'GalleryCtrl',
                    controllerAs: 'self'
    			});
    	});

})();
(function () {
    'use strict';

    angular.module('gallery')
        .controller('GalleryCtrl', GalleryCtrl);

    /* ngInject */
    function GalleryCtrl($scope){
    	var self = this;

    	/* region variables */
		self.Title = 'GalleryCtrl';
        self.GalleryList = [];
    	/* endregion variables */

    	/* region method index */

    	/* endregion method index */

    	init();

    	/* region methods */
    	function init(){
            populateGalleryList();
    	}

        function populateGalleryList(){
            for(var i = 0; i < 18; i++){
                self.GalleryList.push({
                    url: 'assets/images/gallery/gallery' + (i + 1) + '.jpg'
                });
            }
        }
    	/* endregion methods */
    }
}());
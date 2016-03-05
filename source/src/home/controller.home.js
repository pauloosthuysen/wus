(function () {
    'use strict';

    angular.module('home')
        .controller('HomeCtrl', HomeCtrl);

    /* ngInject */
    function HomeCtrl($scope){
    	var self = this;

    	/* region variables */
		self.Title = 'HomeCtrl';
    	/* endregion variables */

    	/* region method index */

    	/* endregion method index */

    	init();

    	/* region methods */
    	function init(){

    	}
    	/* endregion methods */
    }
}());
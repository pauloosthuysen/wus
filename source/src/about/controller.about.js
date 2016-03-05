(function () {
    'use strict';

    angular.module('about')
        .controller('AboutCtrl', AboutCtrl);

    /* ngInject */
    function AboutCtrl($scope){
    	var self = this;

    	/* region variables */
		self.Title = 'AboutCtrl';
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
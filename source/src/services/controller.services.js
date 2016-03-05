(function () {
    'use strict';

    angular.module('services')
        .controller('ServicesCtrl', ServicesCtrl);

    /* ngInject */
    function ServicesCtrl($scope){
    	var self = this;

    	/* region variables */
		self.Title = 'ServicesCtrl';
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
(function () {
    'use strict';

    angular.module('contact')
        .controller('ContactCtrl', ContactCtrl);

    /* ngInject */
    function ContactCtrl($scope){
    	var self = this;

    	/* region variables */
		self.Title = 'ContactCtrl';
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
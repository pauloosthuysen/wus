(function () {
    'use strict';

    angular.module('contact')
        .controller('ContactCtrl', ['$scope', 'toaster', '$http', ContactCtrl]);

    /* ngInject */
    function ContactCtrl($scope, toaster, $http){
    	var self = this;

    	/* region variables */
		self.Title = 'ContactCtrl';
        self.ContactForm = {
            Name: '',
            Phone: '',
            Email: '',
            Message: ''
        };
        self.MessageSent = false;
    	/* endregion variables */

    	/* region method index */
        self.submitForm = submitForm;
    	/* endregion method index */

    	init();

    	/* region methods */
    	function init(){

    	}

        function submitForm(){
            $http.post('bin/contact_me.php', self.ContactForm)
                .success(function(data, status, headers, config){
                    toaster.pop('success', 'Success', 'Your message has been sent successfully.');
                    self.MessageSent = true;
                })
                .error(function(data, status, headers, config){
                    toaster.pop('error', 'Error', 'There was a problem sending the request. Please try again.');
                });
        }
    	/* endregion methods */
    }
}());
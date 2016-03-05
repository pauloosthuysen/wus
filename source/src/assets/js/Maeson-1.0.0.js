(function(){
	'use strict';
	
	angular.module('maesonApp', [
		'ngRoute',
		'home'
	]);
}());
(function(){
	'use strict';

	angular.module('maesonApp')
		.config(['$routeProvider',
			function($routeProvider){
				/* For any unmatched url, redirect to / */
            	$routeProvider.otherwise("/");
			}
		]);

	angular.module('maesonApp')
		.run(['$rootScope', '$route',
			function($rootScope, $route){
				$rootScope.OriginalTitle = null;

				$rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
					if($rootScope.OriginalTitle === null){
						$rootScope.OriginalTitle = document.title;
					}

			        if (oldVal !== newVal && $rootScope.OriginalTitle !== null) {
			            document.title = $rootScope.OriginalTitle + ' | ' + $route.current.title;
			        }
			    });
			}
		]);
}());
(function() {
    'use strict';

    angular
        .module('home', [
 			
        ]);

    angular.module('home')
    	.config(function($routeProvider){
    		$routeProvider
    			.when('/', {
                    title: 'Home Page',
    				templateUrl: 'home/home.html',
    				controller: 'HomeCtrl',
                    controllerAs: 'self'
    			});
    	});

})();
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
(function(){
	'use strict';

	angular.module('wupApp')
		.config(['$routeProvider',
			function($routeProvider){
				/* For any unmatched url, redirect to / */
            	$routeProvider.otherwise("/");
			}
		]);

	angular.module('wupApp')
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
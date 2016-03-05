(function(){
	'use strict';
	
	angular.module('maesonApp', [
		'ngRoute',
		'home',
		'about',
		'services',
		'contact'
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
        .module('about', [
 			
        ]);

    angular.module('about')
    	.config(function($routeProvider){
    		$routeProvider
    			.when('/about', {
                    title: 'About',
    				templateUrl: 'about/about.html',
    				controller: 'AboutCtrl',
                    controllerAs: 'self'
    			});
    	});

})();
(function() {
    'use strict';

    angular
        .module('contact', [
 			
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
(function() {
    'use strict';

    angular
        .module('services', [
 			
        ]);

    angular.module('services')
    	.config(function($routeProvider){
    		$routeProvider
    			.when('/services', {
                    title: 'Services',
    				templateUrl: 'services/services.html',
    				controller: 'ServicesCtrl',
                    controllerAs: 'self'
    			});
    	});

})();
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
(function(){
	'use strict';

	angular.module('maesonApp', [
		'ngRoute',
		'ngResource',
		'ui.bootstrap',
		'home',
		'about',
		'services',
		'contact'
	]);

	angular.module('Common.services', ['ngResource', 'toaster']);
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
(function () {
	'use strict';
	angular.module('Common.services')
	.factory('EmailMe', ['$resource', '$http',
	   function( $resource, $http ) {
			var controller = "EmailMe.php";
			var silent = {
				get : false,
				save : false
			};

			var version = 1;

			var resource = $resource( 'bin/' + controller, {}, silent, version,  "Loading EmailMe ...");

			return resource;
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
            'ngResource',
 			'Common.services'
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
 			'ui.bootstrap'
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
(function () {
    'use strict';

    angular.module('home')
        .controller('HomeCtrl', HomeCtrl);

    /* ngInject */
    function HomeCtrl($scope){
    	var self = this;

    	/* region variables */
		self.Title = 'HomeCtrl';
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;
        $scope.servicesList = [
            {
                title: 'Manufacturing & Furniture',
                description: [
                    'Office',
                    'Home',
                    'Indoor',
                    'Outdoor',
                    'Decor'
                ]
            },{
                title: 'Windows & Flooring',
                description: [
                    'Blinds',
                    'Curtains',
                    'Sound-Proofing',
                    'Carpeting',
                    'Wooden Flooring',
                    'Tiles'
                ]
            },{
                title: 'Technology',
                description: [
                    'GPS',
                    'Cameras',
                    'Telephones',
                    'Computer Equipment',
                    'Networking'
                ]
            },{
                title: 'Lab Equipment',
                description: [
                    'Osteometric Boards',
                    'POT Bearings',
                    'Mandubilometers'
                ]
            }
        ];
        $scope.portfolioList = [
            {
                url: 'assets/images/portfolio/portfolio1.jpg'
            },{
                url: 'assets/images/portfolio/portfolio2.jpg'
            },{
                url: 'assets/images/portfolio/portfolio3.jpg'
            },{
                url: 'assets/images/portfolio/portfolio4.jpg'
            },{
                url: 'assets/images/portfolio/portfolio5.jpg'
            },{
                url: 'assets/images/portfolio/portfolio6.jpg'
            }
        ];

        $scope.addSlide = function(url, title, text) {
            slides.push({
              image: url,
              title: title,
              text: text,
              id: currIndex++
            });
        };
    	/* endregion variables */

    	/* region method index */

    	/* endregion method index */

    	init();

    	/* region methods */
    	function init(){
            $scope.addSlide('assets/images/carousel1.jpg', 'WE WILL EITHER FIND A WAY, OR MAKE ONE', '"Planning without action is futile, action without planning is fatal." — Cornelius Fitchner');
            $scope.addSlide('assets/images/carousel2.jpg', 'COMMITMENT', 'A job can only be truly rewarding if all parties are smiling.');
            $scope.addSlide('assets/images/carousel3.jpg', 'ENDLESS POSIBILITIES', 'The only limit to your impact is your imagination and commitment.');
            $scope.addSlide('assets/images/carousel4.jpg', 'OPPORTUNITY', 'If opportunity doesn\'t knock, build a door.');
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
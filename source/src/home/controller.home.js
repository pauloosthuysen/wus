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
                    'Networking',
                    'Web Site Design',
                    'Web Site Hosting'
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
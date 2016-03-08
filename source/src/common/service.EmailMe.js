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
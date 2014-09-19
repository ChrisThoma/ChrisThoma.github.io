// script.js

	// create the module and name it bluelineApp
	var bluelineApp = angular.module('christhoma', ['ngRoute']);

	// create the controller and inject Angular's $scope
	bluelineApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller    :  'mainController'
			})

			// route for the projects page
			.when('/projects', {
				templateUrl : 'pages/projects.html',
				controller    :  'projectsController'
			})

			// route for the blueline page
			.when('/blueline', {
				templateUrl  	:  'pages/blueline.html',
				controller     	:  'bluelineController'
			})


			.when('/saurav', {
				templateUrl	: 'pages/saurav.html',
				controller 	: 'sauravController'
			});

			$locationProvider.html5Mode(true);
	});

	bluelineApp.controller('mainController', function($scope) {
		//create a message to display in our view
		$scope.message = 'Bio Goes Here';
	});

	bluelineApp.controller('projectsController', function($scope) {
		$scope.message = 'Projects Go Here';
	});

	bluelineApp.controller('bluelineController', function($scope) {
		$scope.message = 'Blue Line Goes Here';
	});

	bluelineApp.controller('sauravController', function($scope) {
		$scope.message = "saurav";
	});




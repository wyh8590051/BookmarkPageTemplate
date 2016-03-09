var gpsApp = angular.module('gpsApp', [  ]);


gpsApp.controller('gpsCtrl', [ '$scope', '$http', function($scope, $http) {

	 $http.get('../json/gps.json').success(function(data) {
		$scope.data = data;
		console.log($scope.data);
	})

	$scope.isTabOne = true;
	$scope.isTabTwo = false;
	$scope.isTabThree = false;
	$scope.isTabFour = false;

	$scope.isShowMore = false;

	$scope.switchToTabOne = function() {
		$scope.isTabOne = true;
		$scope.isTabTwo = false;
		$scope.isTabThree = false;
		$scope.isTabFour = false;
	}
	$scope.switchToTabTwo = function() {
		$scope.isTabOne = false;
		$scope.isTabTwo = true;
		$scope.isTabThree = false;
		$scope.isTabFour = false;
	}
	$scope.switchToTabThree = function() {
		$scope.isTabOne = false;
		$scope.isTabTwo = false;
		$scope.isTabThree = true;
		$scope.isTabFour = false;
	}
	$scope.switchToTabFour = function() {
		$scope.isTabOne = false;
		$scope.isTabTwo = false;
		$scope.isTabThree = false;
		$scope.isTabFour = true;
	}



} ]);
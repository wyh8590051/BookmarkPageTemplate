var gpsApp = angular.module('gpsApp', ['xml']);
      
gpsApp.config(function($httpProvider){
	$httpProvider.interceptors.push('xmlHttpInterceptor');
})
.controller('gpsCtrl',['$scope','$http', function ($scope,$http) {

 
  $http.get('../json/gps.json').success(function(data){
	  $scope.data=data;
  })
  
  $scope.isBank=true;
  $scope.isUtility=false;
  $scope.isFrequent=false;
  $scope.isOther=false;
  
  $scope.isShowMore=false;
  
  $scope.switchToBank=function(){
	  $scope.isBank=true;
	  $scope.isUtility=false;
	  $scope.isFrequent=false;
	  $scope.isOther=false;
  }
  $scope.swtichToThought=function(){
	  $scope.isBank=false;
	  $scope.isUtility=true;
	  $scope.isFrequent=false;
	  $scope.isOther=false;
  }
  $scope.switchToFrequent=function(){
	  $scope.isBank=false;
	  $scope.isUtility=false;
	  $scope.isFrequent=true;
	  $scope.isOther=false;
  }
  $scope.switchToOther=function(){
	  $scope.isBank=false;
	  $scope.isUtility=false;
	  $scope.isFrequent=false;
	  $scope.isOther=true;
  }
  $scope.showMore=function(){
	  $scope.isShowMore=true;
  }
  $scope.showLess=function(){
	  $scope.isShowMore=false;
  }
  
  /*  //options to use XML to store data and read data from xml
   * $http.get('../xml/info.xml').success(function (response) {
       $scope.zhihu = response.content.blogs.zhihus.zhihu;
       $scope.otherBlogs=response.content.others.other;
     });*/
  
}]);
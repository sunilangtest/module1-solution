(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',function($scope){
  $scope.name="";
  $scope.checkitem=function(){
    if($scope.name.trim()==""){
      $scope.message="please enter data first";
    }
    else {
      var iteminfo=$scope.name.split(',');
      var iteminfo=iteminfo.filter(item=>item);
      console.log(iteminfo);
      if(iteminfo.length <=0){
        $scope.message="please enter data first";
      }
      else if (iteminfo.length <= 3) {
        $scope.message="Enjoy!";
      }
      else if (iteminfo.length > 3) {
        $scope.message="Too much!!";
      }
    }
  }
});


})();

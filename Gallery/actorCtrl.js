
app.controller("actorCtrl", function($scope, $http, Actor) {
    
    $http.get("Gallery/actor.json").then(function mySuccess(response) {
          $scope.Gallery=response.data;
      }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })
    $scope.order = function() {
        $scope.orderProp = "first";
    }  
  });
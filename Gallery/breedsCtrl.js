
app.controller("breedsCtrl", function($scope, $http, Breeds) {
    
    $http.get("Gallery/breeds.json").then(function mySuccess(response) {
          $scope.Gallery=response.data;
      }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })
    $scope.order = function() {
        $scope.orderProp = "first";
    }  
  });
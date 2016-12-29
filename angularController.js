/*ng-controller is a directive , we can specifiy the name of the controller. We need ng-app as well.
better to name these controller.
Basically controller are just function invoked by Angular.
Attach model to $scope
*/
var app= angular.module("angularApp",[]);
app.controller("MainController", function($scope,$http){
  var person= {
    firstName: "Scott",
    lastName: "Allen"
  };
  var onUserComplete= function(response){
   $scope.user= response.data;
   $http.get($scope.user.repos_url).then(onRepos,onError);
  };
var onError= function(response){
  $scope.error="Could not find the server";
}
var onRepos= function(response){
  $scope.repos= response.data;
}
  //$http.get("https://api.github.com/users/AditiAnand8")
//  .then(onUserComplete, onError);

    $scope.message="Hello Adit Anand!";
    $scope.person=person;
    $scope.repoSortOrder="-stargazers_count";
    $scope.search=function(username){
      $http.get("https://api.github.com/users/" + username)
      .then(onUserComplete, onError);
    };
});

/* Angular have $http service available to make http calls
A promise to deliver a value in the future.
 */

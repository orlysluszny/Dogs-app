// Code goes here

var app = angular.module("dogApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "home.html"
    })
    .when("/Breeds", {
        templateUrl: "Gallery/breeds.html"
        /*controller: "actorCtrl"*/
    })
    .when("/movie", {
        templateUrl: "movie/movie.html"
    })
    
 
    });    

var app = angular.module('TuneBox', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.view.html',
      controller: 'homeCtrl'
    })
    .when('/register', {
      templateUrl: 'partials/register.view.html',
      controller: 'registerCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/login.view.html',
      controller: 'loginCtrl'
    })
    .when('/room', {
      templateUrl: 'partials/room.view.html',
      controller: 'youtubeCtrl'
    })
    .when('/create-room', {
      templateUrl: 'partials/create-room.html',
      controller: 'roomcreationCtrl'
    })
    .when('/rooms', {
      templateUrl: 'partials/rooms.html',
      controller: 'roomlistingCtrl'
    })
    .when('/profile/', {
      templateUrl: 'partials/profile.view.html',
      controller: 'profileCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
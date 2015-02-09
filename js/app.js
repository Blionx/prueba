'use strict';

/* App Module */

var newApp = angular.module('newApp', [
  'ui.router',
  'bicontrollers'
]);

newApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
    $stateProvider.
    state('home', {
        url: '/manubrio',
        templateUrl: 'partials/manubrio.html',
        controller: 'manubrioctrl'
      }).
      state('llantas', {
        url:'/llantas',
        templateUrl: 'partials/llantas.html',
        controller: 'llantactrl'
      }).
      state('piñones', {
        url:'/piñones',
        templateUrl: 'partials/piñones.html',
        controller:'pinonctrl'
      }).
      state('bicicletas', {
        url:'/bicicletas',
        templateUrl: 'partials/bicicletas.html',
        controller:'bicictrl'
      })
  }]);


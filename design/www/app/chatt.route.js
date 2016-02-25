(function() {
    'use strict';

angular.module('starter', ['ionic', 'ngStorage', 'ngResource', 'GoogleLoginService', 'facebookLoginService', 'ngMessages'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
    url: '/login',
    cache:false,
    templateUrl: 'app/login/login.html',
    controller: 'loginController',
    controllerAs: 'login'
  })
  .state('register', {
    url: '/register',
    cache:false,
    templateUrl: 'app/register/register.html',
    controller: 'registerController',
    controllerAs: 'register'
  })
  .state('verification', {
    url: '/verification',
    cache:false,
    templateUrl: 'app/verification/verification.html',
    controller: 'verificationController',
    controllerAs: 'verification'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});

})();
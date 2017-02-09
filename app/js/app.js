var angular = require('angular'); // angular
//     _      _                         _    ___      _    _ _             _____ _           _ _          
//   /_\  __| |_ ____ _ _ _  __ ___ __| |  / __|__ _| |__| (_)_ _  __ _  |_   _(_)_ __  ___| (_)_ _  ___ 
//   / _ \/ _` \ V / _` | ' \/ _/ -_) _` | | (__/ _` | '_ \ | | ' \/ _` |   | | | | '  \/ -_) | | ' \/ -_)
//  /_/ \_\__,_|\_/\__,_|_||_\__\___\__,_|  \___\__,_|_.__/_|_|_||_\__, |   |_| |_|_|_|_\___|_|_|_||_\___|
//                                                                 |___/                                  
 
var app = angular.module('app', [
        'ui.router'
    ]);
    
require('angular-ui-router');
    
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true).hashPrefix('!');
    
    $urlRouterProvider.otherwise('/');
    
});

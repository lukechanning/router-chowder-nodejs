var angular = require('angular'); // angular

/* --------------------------------------------------------------------------
    _   _      ___ _           _     ___                   _   _           
   /_\ (_)_ _ / __| |_  ___ __| |__ | _ \___ _ __  ___ _ _| |_(_)_ _  __ _ 
  / _ \| | '_| (__| ' \/ -_) _| / / |   / -_) '_ \/ _ \ '_|  _| | ' \/ _` |
 /_/ \_\_|_|  \___|_||_\___\__|_\_\ |_|_\___| .__/\___/_|  \__|_|_||_\__, |
                                            |_|                      |___/ 
-------------------------------------------------------------------------- */

var app = angular.module('app', [
        'ui.router'
    ]);
    
require('angular-ui-router');
    
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true).hashPrefix('!');
    
    $urlRouterProvider.otherwise('/');
    
});

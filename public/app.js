(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//   _____             _               _____ _                      _           
//  |  __ \           | |             / ____| |                    | |          
//  | |__) |___  _   _| |_ ___ _ __  | |    | |__   _____      ____| | ___ _ __ 
//  |  _  // _ \| | | | __/ _ \ '__| | |    | '_ \ / _ \ \ /\ / / _` |/ _ \ '__|
//  | | \ \ (_) | |_| | ||  __/ |    | |____| | | | (_) \ V  V / (_| |  __/ |   
//  |_|  \_\___/ \__,_|\__\___|_|     \_____|_| |_|\___/ \_/\_/ \__,_|\___|_|   

new Vue({
    el: '#contact__form', // id of the form 'app'
    data: {
        name: '', // data for the name on the form
        email: '', // data for the email on the form
        select: '', // data for the select on the form
        sent: false,
        unsent: true
    },
    methods: { // all the actions our app can do
        isValidName: function() { // TODO what if name is just spaces?
            var valid = this.name.length > 0;
            console.log('checking for a valid name: ' + valid);
            return valid;
        },
        isValidEmail: function() { // TODO is a@b a valid email?
            var valid = this.email.indexOf('@') > 0;
            console.log('checking for a valid email: ' + valid);
            return valid;
        },
        submitForm: function() {
            
            this.$http.post('/email', {
                name: this.name,
                email: this.email,
                select: this.select
            });

        }
    }
});
},{}]},{},[1]);

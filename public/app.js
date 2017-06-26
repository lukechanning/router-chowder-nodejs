(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//   _____             _               _____ _                      _           
//  |  __ \           | |             / ____| |                    | |          
//  | |__) |___  _   _| |_ ___ _ __  | |    | |__   _____      ____| | ___ _ __ 
//  |  _  // _ \| | | | __/ _ \ '__| | |    | '_ \ / _ \ \ /\ / / _` |/ _ \ '__|
//  | | \ \ (_) | |_| | ||  __/ |    | |____| | | | (_) \ V  V / (_| |  __/ |   
//  |_|  \_\___/ \__,_|\__\___|_|     \_____|_| |_|\___/ \_/\_/ \__,_|\___|_|   

$(document).ready(function() {
    
    // fire the scroll into view function
    $(window).on("scroll resize", function() {
        $(".faded").each(function(index, element) {
            if (isScrolledIntoView(element)) {
                $(element).animate({
                    opacity: 1.0
                }, 500);
            }
        });
    });
    
    //on hover, show bio for cities
    $('.home__staff-images > div').mouseover(function(){
        var attribute = $(this).attr("data-city");
        $( ".home__staff-bio" ).fadeTo(80,0);
        $("." + attribute).fadeTo(80,1);
    });
    
});

function isScrolledIntoView(elem) {
    var centerY = Math.max(0, (($(window).height() - $(elem).outerHeight()) - 50) +
        $(window).scrollTop());

    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).height();

    return elementTop <= centerY && elementBottom >= centerY;
}
},{}]},{},[1]);

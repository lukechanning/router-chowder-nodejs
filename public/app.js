(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//   _____             _               _____ _                      _           
//  |  __ \           | |             / ____| |                    | |          
//  | |__) |___  _   _| |_ ___ _ __  | |    | |__   _____      ____| | ___ _ __ 
//  |  _  // _ \| | | | __/ _ \ '__| | |    | '_ \ / _ \ \ /\ / / _` |/ _ \ '__|
//  | | \ \ (_) | |_| | ||  __/ |    | |____| | | | (_) \ V  V / (_| |  __/ |   
//  |_|  \_\___/ \__,_|\__\___|_|     \_____|_| |_|\___/ \_/\_/ \__,_|\___|_|   

$(document).ready(function() {

    //on hover, show bio for cities
    // $('.home__staff-images > div').mouseover(function() {
    //     var attribute = $(this).attr("data-city");
    //     $(".home__staff-bio").not("." + attribute).css('opacity', 0);
    //     $("." + attribute).fadeTo(80, 1);
    // });

    // $('.home__staff').scrollie({
    //     direction: 'both',
    //     scrollOffset : -600,
    //     scrollRatio: 2,
    //     scrollingToTheTop: function(elem) {
    //         $(elem).addClass('night');
    //     }
    // });

});

/****
 * jQuery Scrollie Plugin v1.0.1
 * https://github.com/Funsella/jquery-scrollie
 *
 * Copyright 2013 JP Nothard
 * Released under the MIT license
 */
! function(l, t) {
    "use strict";

    function s(t, s) {
        this.element = t, this.settings = l.extend({}, i, s), this._defaults = i, this._name = e, this.init()
    }
    var e = "scrollie",
        i = {
            direction: "both",
            scrollOffset: 0,
            scrollRatio: 2,
            scrollingInView: null,
            scrollingToTheTop: null,
            scrollingOutOfView: null,
            scrolledOutOfView: null
        };
    s.prototype = {
        init: function() {
            this._defineElements(), this._scrollEvent()
        },
        _defineElements: function() {
            var t = this;
            t.$scrollElement = l(t.element), t.$elemHeight = t.$scrollElement.outerHeight(), t.$elemPosTop = t.$scrollElement.offset().top, t.$scrollOffset = t.$scrollElement.data("scrollie-offset") || "0" == t.$scrollElement.data("scrollie-offset") ? t.$scrollElement.data("scrollie-offset") : t.settings.scrollOffset, t.$scrollRatio = t.$scrollElement.data("scrollie-scrollRatio") || "0" == t.$scrollElement.data("scrollie-scrollRatio") ? t.$scrollElement.data("scrollie-scrollRatio") : t.settings.scrollRatio
        },
        _inMotion: function(l, t, s, e) {
            var i = this,
                o = -1 * (-1 * (l - s) - t),
                n = o / 2,
                c = o < t + i.$elemHeight,
                r = o > 0 - i.$scrollOffset,
                f = r && t > o,
                u = r && c,
                a = o > t - i.$scrollOffset && c;
            f && jQuery.isFunction(i.settings.scrollingToTheTop) && i.settings.scrollingToTheTop.call(this, this.$scrollElement, i.$scrollOffset, e, o, n, s, l), u && jQuery.isFunction(i.settings.scrollingInView) && i.settings.scrollingInView.call(this, this.$scrollElement, i.$scrollOffset, e, o, n, s, l), a && jQuery.isFunction(i.settings.scrollingOutOfView) && i.settings.scrollingOutOfView.call(this, this.$scrollElement, i.$scrollOffset, e, o, n, s, l), c || jQuery.isFunction(i.settings.scrolledOutOfView) && i.settings.scrolledOutOfView.call(this, this.$scrollElement, i.$scrollOffset, e, o, n, s, l)
        },
        _scrollEvent: function() {
            var s = this,
                e = s.settings.direction,
                i = 0,
                o = !0;
            setInterval(function() {
                o = !0
            }, 66), l(t).on("scroll", function() {
                var t = l(this).scrollTop(),
                    n = l(this).height(),
                    c = t > i ? "up" : "down";
                c === e && o === !0 ? (o = !1, s._inMotion(t, n, s.$elemPosTop, c)) : "both" === e && o === !0 && (o = !1, s._inMotion(t, n, s.$elemPosTop, c)), i = t
            })
        }
    }, l.fn[e] = function(t) {
        return this.each(function() {
            l.data(this, "plugin_" + e) || l.data(this, "plugin_" + e, new s(this, t))
        })
    }
}(jQuery, window, document);
},{}]},{},[1]);

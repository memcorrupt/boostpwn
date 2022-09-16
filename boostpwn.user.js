// ==UserScript==
// @name         BoostPwn
// @namespace    https://mem.rip/
// @version      2.0
// @description  dont do the verification things on boost.ink
// @author       memcorrupt
// @match        https://boost.ink/*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function(){
    'use strict';

    var windowEvents = $._data(window, "events");

    windowEvents.blur[0].handler(); //set blurWorks to true
    var focusHandler = windowEvents.focus[0].handler;

    $(".step_block").each(function(){
        this.onclick({isTrusted: true});
        focusHandler();
    });
    $(".complete_btn")[0].onclick({isTrusted: true});
})();

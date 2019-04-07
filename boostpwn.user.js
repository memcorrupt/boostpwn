// ==UserScript==
// @name         BoostPwn
// @namespace    https://liquidram.tech/
// @version      0.1
// @description  dont do the verification things on boost.ink
// @author       memcorrupt
// @match        https://boost.ink/*
// @grant        none
// @run-at document-end
// ==/UserScript==

$(".complete_btn").removeAttr("disabled")[0].onclick=function(){location.href=atob(atob(jQuery(this).attr("data-href")));};
$ = null;

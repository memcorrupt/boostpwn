// ==UserScript==
// @name         BoostPwn
// @namespace    https://mem.rip/
// @version      1.0
// @description  dont do the verification things on boost.ink
// @author       memcorrupt
// @match        https://boost.ink/*
// @grant        none
// @run-at document-start
// ==/UserScript==

(function(){
    'use strict';
    const observer = new MutationObserver(mutations => {
        for(const mutation of mutations){
            for(const node of mutation.addedNodes){
                if(node.src && node.src.match("unlock.js")){
                    let url = node.getAttribute("version");
                    if(!url){
                        alert("boostpwn is broken");
                        return;
                    }
                    observer.disconnect();
                    setTimeout(() => { //chrome bug causes access violation ?
                        location.href = atob(url);
                    });
                }
            }
        }
    });
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();

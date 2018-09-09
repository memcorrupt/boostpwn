// ==UserScript==
// @name         BoostPwn
// @namespace    https://liquidram.tech/
// @version      0.1
// @description  dont do the verification things on boost.ink
// @author       memcorrupt
// @match        https://boost.ink/*
// @grant        none
// @run-at document-start
// ==/UserScript==

//i was gonna obfuscate this but saw no point as it had a performance hit resulting in it going to boost.ink and then running my script. i cbf to do anything with it and at this point all the logic is done via my server

var scripts = document.getElementsByTagName("script");
for(var i = 0; i < scripts.length; i++){
	scripts[i].remove();
}
document.body.remove();
document.write("Redirecting... If you are not redirected in the next 10 seconds please refresh the page.");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://mem.rip/api/boostpwn.php?key=boostinkisadeadmeme&link="+decodeURIComponent(location.pathname.toString().substr(1)), false);
xhr.send();
window.location.href = xhr.responseText;

// ==UserScript==
// @name         Roku Remote Extension A
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirects rokuremote website to about:blank
// @author       crunchyguy
// @match        http://rokuremote.glitch.me
// @match        https://rokuremote.glitch.me
// @updateURL    https://github.com/prettycrunchyguy/rokuremote/raw/main/rokuA.user.js
// @downloadURL  https://github.com/prettycrunchyguy/rokuremote/raw/main/rokuA.user.js
// @grant        none
// ==/UserScript==
(function(){
  window.location = 'about:blank?crunchyguy=roku'
})();

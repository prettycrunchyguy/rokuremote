// ==UserScript==
// @name         Roku Remote Extension
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Fixes rokuremote website
// @author       crunchyguy
// @match        http://rokuremote.glitch.me
// @match        https://rokuremote.glitch.me
// @updateURL    https://github.com/prettycrunchyguy/rokuremote/raw/main/rokuA.user.js
// @downloadURL  https://github.com/prettycrunchyguy/rokuremote/raw/main/rokuA.user.js
// @grant        none
// ==/UserScript==
(function(){
  //window.location = 'about:blank?crunchyguy=roku'
  window.location = "data:text/html,<script>let e=new XMLHttpRequest();e.onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE){document.write(e.responseText)}};e.open('GET','http://rokuremote.glitch.me/app.html',true);e.send(null)</script>"
})();

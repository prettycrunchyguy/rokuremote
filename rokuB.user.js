// ==UserScript==
// @name         Roku Remote Extension B
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Helper extension for launching Roku Remote app
// @author       crunchyguy
// @match        about:blank
// @updateURL    https://github.com/prettycrunchyguy/rokuremote/raw/main/rokuB.user.js
// @downloadURL  https://github.com/prettycrunchyguy/rokuremote/raw/main/rokuB.user.js
// @grant        none
// ==/UserScript==
(function(){
  let args = new URLSearchParams(window.location.search);
  if (args.get('crunchyguy') == 'roku'){
    let e=new XMLHttpRequest();
    e.onreadystatechange=function(){
      if(e.readyState==XMLHttpRequest.DONE){
        document.write(e.responseText)
      }
    };
    e.open('GET','http://rokuremote.glitch.me/app.html',true);
    e.send(null);
  }
})();

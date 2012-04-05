// 2012-04-05
// version 0.1
// author - Alder (aleksey.derkach@gmail.com)
// ==UserScript==
// @name 8tracks favorite tracks list
// @namespace 8tracksfavslist
// @description Show textarea with list of all your 8tracks.com favorite tracks. Ready to copy song names to clipboard.
// @include http://8tracks.com/users/*/favorite_tracks
// @include http://8tracks.com/users/*/favorite_tracks*
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==

// a function that loads remote js-code
function addCode() {
  var script = document.createElement("script");
  script.setAttribute("src", "https://raw.github.com/alder/8tracksfavslist/master/8tracksfavslist.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// load current version of js fron Github
addCode();
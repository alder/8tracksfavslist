// 2012-04-05
// version 0.1
// author - Alder (aleksey.derkach@gmail.com)
// ==UserScript==
// @name 8tracks favorite tracks list
// @namespace 8tracksfavslist
// @description Show textarea with list of all your 8tracks.com favorite tracks. Ready to copy song names to clipboard.
// @include http://8tracks.com/users/*/favorite_tracks
// @include http://8tracks.com/users/*/favorite_tracks#
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  $('.user_about').append('<a href="#" id="showfavslist" style="cursor: pointer;">Show favorites songs list</div>');
  $('.user_about').append('<textarea rows="20" cols="40" id="favslist" name="favslist" style="display: none;"></textarea>');
  $('#showfavslist').click(function() {
  if ($('#showfavslist').text() == 'Show favorites songs list') {
      $('#showfavslist').text('Hide favorites songs list');
      $('#favslist').show();
      $('li.fav_track').each(function (index, item) {
                    var songname = $(item).find('div.track_info span.a a').text() + " - " + $(item).find('div.track_info span.t a').text() + "\n";
                    $('#favslist').val($('#favslist').val() + songname); 
                });
  }
  else {
      $('#showfavslist').text('Show favorites songs list');
      $('#favslist').hide();
  };
  });
}

// load jQuery and execute the main function
addJQuery(main);
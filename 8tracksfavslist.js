function run_favs_getter () {
  $('.user_about').append('<a href="#" id="showfavslist" style="cursor: pointer;">Show favorites songs list</div>');
  $('.user_about').append('<textarea rows="20" cols="40" id="favslist" name="favslist" style="display: none;"></textarea>');
  $('#showfavslist').click(function() {
  if ($('#showfavslist').text() == 'Show favorites songs list') {
      $('#showfavslist').text('Hide favorites songs list');
      $('#favslist').show();
      $('li.fav_track').each(function (index, item) {
                    var title = $(item).find('div.track_info span.t a').text();
                    if (title == '') title = $(item).find('div.track_info span.t').text()
                    var songname = $(item).find('div.track_info span.a a').text() + " - " + title + "\n";
                    $('#favslist').val($('#favslist').val() + songname); 
                });
  }
  else {
      $('#showfavslist').text('Show favorites songs list');
      $('#favslist').hide();
  };
  });
}

run_favs_getter ();
$(document).ready(function(){
  tracker = new Tracker

  var play_turn = function() {
    $('td').on('click', function() {

      if ($(this).find('.unplayed').length) {
        var current_column = "." + $(this).attr("class")
        $(current_column).find('.unplayed').last().addClass(tracker.color + ' played').removeClass('unplayed');
        tracker.turnColor();
      }
    });
  }

  play_turn();
});

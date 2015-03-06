$(document).ready(function(){
  tracker = new Tracker

  var play_turn = function() {
    $('td').on('click', function() {
      var current_column = "." + $(this).attr("class")

      if ($(current_column).find('.unplayed').length > 0) {
        // debugger
        $(current_column).find('.unplayed').last().addClass(tracker.color + ' played').removeClass('unplayed');
        tracker.turnColor();
      }
    });
  }

  play_turn();
});

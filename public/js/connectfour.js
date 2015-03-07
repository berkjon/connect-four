$(document).ready(function(){
  tracker = new Tracker();

  var play_turn = function() {
    $(".current-player .circle").css("background-color", tracker.color);
    $('td').on('click', function(event) {
      var current_column = "." + $(this).attr("class")

      if ($(current_column).find('.unplayed').length > 0) {
        var $currentDisc = $(current_column).find('.unplayed').last();
        $(current_column).find('.unplayed').last().addClass(tracker.color + ' played').removeClass('unplayed');

        if (diagonalCheck($currentDisc, tracker.color) || horizontalCheck($currentDisc) || verticalCheck($currentDisc, tracker.color)) {
          alert('winner!');
          return true;
        }


        tracker.turnColor();
      }
      $(".current-player .circle").css("background-color", tracker.color);
    });
  }

  play_turn();
});


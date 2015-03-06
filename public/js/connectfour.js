$(document).ready(function(){
  tracker = new Tracker();

  var play_turn = function() {
    $(".current-player .circle").css("background-color", tracker.color);
    $('td').on('click', function() {
      var current_column = "." + $(this).attr("class")

      if ($(current_column).find('.unplayed').length > 0) {
        // debugger
        var $currentDisc = $(current_column).find('.unplayed').last();
        $(current_column).find('.unplayed').last().addClass(tracker.color + ' played').removeClass('unplayed');

        // console.log("final count LEFT: " + diagonalCheckLeft($currentDisc, tracker.color));
        // console.log("final count RIGHT: " + diagonalCheckRight($currentDisc, tracker.color));

        console.log("WIN DIAG?:", diagonalCheck($currentDisc, tracker.color))
        console.log("WIN LEFT?:", horizontalChecker($currentDisc));
        tracker.turnColor();
      }
      $(".current-player .circle").css("background-color", tracker.color);
    });
  }

  play_turn();
});

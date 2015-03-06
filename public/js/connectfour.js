$(document).ready(function(){

  tracker = new Tracker();

var play_turn = function() {
  $('td').on('click', function() {
    // debugger
    //if column has unplayed squares, add disc to column
      //also add to counter for turns
    if ($(this).find('.unplayed').length) {
      var current_column = "." + $(this).attr("class")
      console.log(current_column)
      $(current_column).find('.unplayed').last().addClass(tracker.color + ' played').removeClass('unplayed');

      console.log(tracker.color);
      //add to player turn counter
      tracker.turnColor();

    // } else {

    }
      //else
        //call play turn again
  });

}

//play game function

  play_turn();

});

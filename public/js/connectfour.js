
//Overall put disks into appropriate column
//column class names: one two three four five six seven

//pseudocode:

//initialize turn counter = 0;
  //even: red;
  //odd: black;

  // add 1 to counter of the click event (global scope)

//Check if column has an unplayed square
// if true, then run

$(document).ready(function(){
  tracker = new Tracker

  var play_turn = function() {
    $('td').on('click', function() {
    // debugger
      var current_column = "." + $(this).attr("class")
      console.log(current_column)
      $(current_column).find('.unplayed').last().addClass('red played').removeClass('unplayed');
    });
  }

play_turn();

});


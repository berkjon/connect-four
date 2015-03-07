  var x;
$(document).ready(function(){
  tracker = new Tracker();
  game1Ref = myDataRef.child('/12345');
      myDataRef.on("value", function(snapshot){
        renderBoard(snapshot.val()[12345]);
        x = snapshot;
        // console.log(snapshot.val().12345);
        // console.log(snapshot.val());
      });

  var play_turn = function() {
    $(".current-player .circle").css("background-color", tracker.color);
    $('td').on('click', function() {
      var current_column = "." + $(this).attr("class")

      if ($(current_column).find('.unplayed').length > 0) {
        // debugger
        var $currentDisc = $(current_column).find('.unplayed').last();
        $(current_column).find('.unplayed').last().addClass(tracker.color + ' played').removeClass('unplayed');

        /// code for board persistence
        var currentCol = board[$(this).attr("class")]
        var currentCellIndex = currentCol.indexOf("unplayed");
        currentCol[currentCellIndex] = tracker.color;

        game1Ref.set(board);
        // console.log(myDataRef);


        //MUST RESET WINCOUNT HERE before checking winChecker
        //OR AT LEAST BEFORE INDIVIDUAL CHECKS in winChecker wrapper
        console.log(diagonalCheckLeft($currentDisc));
        tracker.turnColor();
        //something like:
        // console.log(diagonalCheckLeftTop($currentDisc));
      }
      $(".current-player .circle").css("background-color", tracker.color);


    });
  }

  play_turn();
});

var renderBoard = function(my_board) {
  for (var c = 1; c <= Object.keys(my_board).length; c++) {
    var currentRowKey = Object.keys(my_board)[c-1];
    for (var r = 1; r <= my_board[currentRowKey].length; r++) {
      if (my_board[currentRowKey][r-1] === "red") {
        $("table tr:nth-child("+(7-r)+") td."+c+" div").addClass('red played');
        $("table tr:nth-child("+(7-r)+") td."+c+" div").removeClass('unplayed');
      } else if (my_board[currentRowKey][r-1] === "black") {
        $("table tr:nth-child("+(7-r)+") td."+c+" div").addClass('black played');
        $("table tr:nth-child("+(7-r)+") td."+c+" div").removeClass('unplayed');
      }
    }
  }
}

// var renderBoard = function(my_board) {
//   for (var c = 1; c <= Object.keys(board).length; c++) {
//     var currentRowKey = Object.keys(board)[c-1];
//     for (var r = 1; r <= board[currentRowKey].length; r++) {
//       if (board[currentRowKey][r-1] === "red") {
//         $("table tr:nth-child("+(7-r)+") td."+c+" div").addClass('red played');
//         $("table tr:nth-child("+(7-r)+") td."+c+" div").removeClass('unplayed');
//       } else if (board[currentRowKey][r-1] === "black") {
//         $("table tr:nth-child("+(7-r)+") td."+c+" div").addClass('black played');
//         $("table tr:nth-child("+(7-r)+") td."+c+" div").removeClass('unplayed');
//       }
//     }
//   }
// }

var board = {
  "1": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "2": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "3": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "4": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "5": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "6": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "7": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"]
}

// var convertColorClass = {
//   "unplayed": 0,
//   "red": 1,
//   "black": 2
// }

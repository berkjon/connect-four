  var x;
$(document).ready(function(){
  var game1Ref = myDataRef.child('/12345');
  game1Ref.set(blank_board);
  // debugger;
  tracker = new Tracker();

  myDataRef.on("value", function(snapshot){
    renderBoard(snapshot.val()[12345]);
    x = snapshot.val()[12345];
    // console.log(snapshot.val().12345);
    // console.log(snapshot.val());
  });

  $('#restart-game').on('click', function(){
    game1Ref.set(blank_board);
    // renderBoard(blank_board);
    // current_board = blank_board;
  })

  var play_turn = function() {
    // $(".current-player .circle").css("background-color", current_board.current_player);
    // debugger;
    $('td').on('click', function() {
      // $(".current-player .circle").css("background-color", current_board.current_player);

      var current_column = "." + $(this).attr("class")

      if ($(current_column).find('.unplayed').length > 0) {
        // var $currentDisc = $(current_column).find('.unplayed').last();
        // $(current_column).find('.unplayed').last().addClass(x.color + ' played').removeClass('unplayed');
        // debugger;

        /// code for board persistence
        console.log('inside click function');
        var currentCol = current_board[$(this).attr("class")]
        var currentCellIndex = currentCol.indexOf("unplayed");
        currentCol[currentCellIndex] = currentColor[tracker.counter % 2];





////////// attempts to update board state in firebase
        var currentColIndex = $(this).attr('class');
        var currentCellIndex = x[currentColIndex].indexOf('unplayed');

        var currentColRef = game1Ref.child(currentColIndex);
        var currentCellRef = currentColRef.child(currentCellIndex);
        currentCellRef.set(currentColor[tracker.counter % 2]);

        // debugger;

        // // var dataRefUpdateJson = {currentColIndex: {currentCellIndex: currentColor[tracker.counter % 2]}};

        // var dataRefUpdateJson = {};
        // dataRefUpdateJson[currentColIndex] = {};
        // dataRefUpdateJson[currentColIndex][currentCellIndex] = currentColor[tracker.counter % 2];
        // game1Ref.update(dataRefUpdateJson);

        // // game1Ref.update({
        // //   currentColIndex: {
        // //     currentCellIndex: currentColor[tracker.counter % 2]
        // //   }
        // // });

        // // game1Ref.update(current_board);
        // // game1Ref.set(current_board);
        // // console.log(myDataRef);


        //MUST RESET WINCOUNT HERE before checking winChecker
        //OR AT LEAST BEFORE INDIVIDUAL CHECKS in winChecker wrapper
        // console.log(diagonalCheckLeft($currentDisc));
        tracker.turnColor();
        var currentTurnCounter = game1Ref.child('turn_counter');
        console.log("setting FB turncounter to equal"+tracker.counter);
        currentTurnCounter.set(tracker.counter);
        // current_board['current_player'] = currentColor[tracker.counter % 2]; // is this necessary?
        var currentTurnRef = game1Ref.child('current_player');
        currentTurnRef.set(currentColor[tracker.counter % 2]);

        //something like:
        // console.log(diagonalCheckLeftTop($currentDisc));
      }
      // $(".current-player .circle").css("background-color", currentColor[tracker.counter % 2]);


    });
  }

  play_turn();
});

var renderBoard = function(my_board) {
  // debugger
  // console.log(my_board);
  for (var c = 1; c <= Object.keys(my_board).length; c++) {
    var currentRowKey = Object.keys(my_board)[c-1];
    for (var r = 1; r <= my_board[currentRowKey].length; r++) {
      if (my_board[currentRowKey][r-1] === "red") {
        $("table tr:nth-child("+(7-r)+") td."+c+" div").addClass('red played');
        $("table tr:nth-child("+(7-r)+") td."+c+" div").removeClass('unplayed');
      } else if (my_board[currentRowKey][r-1] === "black") {
        $("table tr:nth-child("+(7-r)+") td."+c+" div").addClass('black played');
        $("table tr:nth-child("+(7-r)+") td."+c+" div").removeClass('unplayed');
      } else if (my_board[currentRowKey][r-1] === "unplayed") {
        $("table tr:nth-child("+(7-r)+") td."+c+" div").addClass('unplayed');
        $("table tr:nth-child("+(7-r)+") td."+c+" div").removeClass('red black played');
      }
    }
  }
  $(".current-player .circle").css("background-color", my_board.current_player);
  // console.log(my_board);

  // current_board = my_board;
  ///////////// below methods if changing individual FB elements, not resetting whole DB
  tracker.counter = my_board.turn_counter;
  // tracker.color = my_board.current_player;
  current_board.turn_counter = my_board.turn_counter;
  current_board.current_player = my_board.current_player;
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

var current_board = {
  "1": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "2": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "3": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "4": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "5": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "6": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "7": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "current_player": "red",
  "turn_counter": 0
}

var blank_board = {
  "1": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "2": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "3": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "4": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "5": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "6": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "7": ["unplayed", "unplayed", "unplayed", "unplayed", "unplayed", "unplayed"],
  "current_player": "red",
  "turn_counter": 0
}

var currentColor = {
  0: "red",
  1: "black"
  // "unplayed": 0,
}

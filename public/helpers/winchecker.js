
// var winCheck = function() {
//   var winCount = 0;

// }

// var diagonalCheck = function() {
//   // take current disc's current position
//   // go left and up

// };

//for TESTING PURPOSES ONLY
testWinCount = 0;

var diagonalCheckLeftTop = function(currentPlayedDisc) {
  // go left and up by traversing the dom
    //use parent() to go up a level and prev()/next() to go forward or back a row
    //assume arg is current disk (ie: div !!!VERY IMPORTANT!!!)

  var self = currentPlayedDisc; //this refers to the disc being played
  var currentDiscColumn = $(self).parent().attr("class");
  var discColumnClassToTheLeft = currentDiscColumn - 1;
  var discColumnClassToTheLeft = '.' + discColumnClassToTheLeft;
  var cellToTheTopLeft = $(self).parent().parent().prev().find(discColumnClassToTheLeft);

  //check if top left has same class as current color
  var currentPlayerColor = '.' + tracker.color;
  var nextDisc = cellToTheTopLeft.find(currentPlayerColor);
  //if nextDisc doesn't exist
  if (nextDisc.length === 0) {
    //return out of function
    return 0;
  }

  var nextDiscColor = '.' + nextDisc.attr('class').split(' ')[1];

  if (currentPlayerColor == nextDiscColor) {
    //loop again, using cellToTheTopLeft as the checked disc use recursion?
    //recurse
    testWinCount++;
    diagonalCheckLeftTop(nextDisc);
  }

  return testWinCount;
};

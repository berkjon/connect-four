// testWinCount = 0;

// var winCheck = function() {
//   var winCount = 0;

// }

// var diagonalCheck = function(currentPlayedDisc) {
//   // take current disc's current position

//   // var testWinCount = 0
//   if ((diagonalCheckLeft(currentPlayedDisc) == 4) || (diagonalCheckRight(currentPlayedDisc) == 4)) {
//      return true;
//   }

//   return false;
// };

var diagonalCheckLeft = function(currentPlayedDisc) {
  var leftWinCount = 1; //counts itself too
  // console.log(leftWinCount);
  // return diagonalCheckLeftBottom(currentPlayedDisc, leftWinCount)
  return diagonalCheckLeftTop(currentPlayedDisc, leftWinCount) + diagonalCheckLeftBottom(currentPlayedDisc, leftWinCount)
};

var diagonalCheckRight = function(currentPlayedDisc) {

};



var diagonalCheckLeftTop = function(currentPlayedDisc, leftWinCount) {
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

  //if nextDisc doesn't exist OR is another color
  //BASE CASE
  if (nextDisc.length === 0) {
    //return out of function

    //could return winCount
    return leftWinCount;
  }

  var nextDiscColor = '.' + nextDisc.attr('class').split(' ')[1];

  if (currentPlayerColor == nextDiscColor) {
    //loop again, using cellToTheTopLeft as the checked disc use recursion

    //change to actual winCount
    leftWinCount++;
    diagonalCheckLeftTop(nextDisc, leftWinCount);
  }

  //change to actual winCount
  return leftWinCount;
};

//or bottom right. however you look at it. Think of it as northwest to southeast
var diagonalCheckLeftBottom = function(currentPlayedDisc, leftWinCount) {
  // go left and up by traversing the dom
    //use parent() to go up a level and prev()/next() to go forward or back a row
    //assume arg is current disk (ie: div !!!VERY IMPORTANT!!!)

  var self = currentPlayedDisc; //this refers to the disc being played
  var currentDiscColumn = $(self).parent().attr("class");
  //added a + in front of currentDiscColumn to make it an integer
  var discColumnClassToTheRight = +currentDiscColumn + 1;
  var discColumnClassToTheRight = '.' + discColumnClassToTheRight;
  var cellToTheBotRight = $(self).parent().parent().next().find(discColumnClassToTheRight);

  //check if top left has same class as current color
  var currentPlayerColor = '.' + tracker.color;
  var nextDisc = cellToTheBotRight.find(currentPlayerColor);

  //if nextDisc doesn't exist OR is another color
  if (nextDisc.length === 0) {
    //return out of function

    //could return winCount, or false, doesn't matter
    return 0;
  }

  var nextDiscColor = '.' + nextDisc.attr('class').split(' ')[1];

  if (currentPlayerColor == nextDiscColor) {
    //loop again, using cellToTheTopLeft as the checked disc use recursion

    //change to actual winCount
    leftWinCount++;
    diagonalCheckLeftBottom(nextDisc, leftWinCount);
  }

  //change to actual winCount
  return leftWinCount;
};

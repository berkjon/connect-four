
var horizontalChecker = function(currentDisc) {
  var currentWinCount = 1;

  leftWinCount = checkLeft(currentDisc, currentWinCount)
  totalWinCount = checkRight(currentDisc, leftWinCount)

  if (totalWinCount == 4) {
    return true;
  } else {
    return false;
  }

};

var checkLeft = function(currentDisc, currentWinCount) {
  var currentDiscColumn = $(currentDisc).parent().attr("class");
  var discColumnClassToLeft = '.' + (currentDiscColumn - 1);
  var cellToTheLeft = $(currentDisc).parent().parent().find(discColumnClassToLeft);

  var currentPlayerColor = '.' + tracker.color;
  var nextDisc = cellToTheLeft.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = '.' + nextDisc.attr('class').split(' ')[1];

  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return checkLeft(nextDisc, currentWinCount);
  }

};

var checkRight = function(currentDisc, currentWinCount) {
  var currentDiscColumn = $(currentDisc).parent().attr("class");
  var discColumnClassToRight = '.' + (+currentDiscColumn + 1);
  var cellToTheRight = $(currentDisc).parent().parent().find(discColumnClassToRight);

  var currentPlayerColor = '.' + tracker.color;
  var nextDisc = cellToTheRight.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = '.' + nextDisc.attr('class').split(' ')[1];

  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return checkRight(nextDisc, currentWinCount);
  }

};





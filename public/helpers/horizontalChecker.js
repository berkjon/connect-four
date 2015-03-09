
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
  var cellToTheLeft = getLeftCell(currentDisc);
  var currentPlayerColor = getColorClass(tracker.color);
  var nextDisc = cellToTheLeft.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = getNextDiscColor(nextDisc);
  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return checkLeft(nextDisc, currentWinCount);
  }
};

var checkRight = function(currentDisc, currentWinCount) {
  var cellToTheRight = getRightCell(currentDisc);
  var currentPlayerColor = getColorClass(tracker.color)
  var nextDisc = cellToTheRight.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = getNextDiscColor(nextDisc);
  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return checkRight(nextDisc, currentWinCount);
  }
};





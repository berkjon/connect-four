
var getCurrentDiscColumn = function(currentDisc) {
  return $(currentDisc).parent().attr("class");
};

var getColumnClassLeft = function(currentDiscColumn) {
  return '.' + (currentDiscColumn - 1);
};

var getColumnClassRight = function(currentDiscColumn) {
  return '.' + (+currentDiscColumn + 1);
};

var getNextDiscColor = function(nextDisc) {
  return '.' + nextDisc.attr('class').split(' ')[1];
};

var getNorthWestCell = function(currentDisc) {
  var currentDiscColumn = getCurrentDiscColumn(currentDisc);
  var discClassNorthWest = getColumnClassLeft(currentDiscColumn);
  return $(currentDisc).parent().parent().prev().find(discClassNorthWest);
};

var getSouthEastCell = function(currentDisc) {
  var currentDiscColumn = getCurrentDiscColumn(currentDisc);
  var discColumnSouthEast = getColumnClassRight(currentDiscColumn);
  return $(currentDisc).parent().parent().next().find(discColumnSouthEast);
}

var getNorthEastCell = function(currentDisc) {
  var currentDiscColumn = getCurrentDiscColumn(currentDisc);
  var discClassNorthEast = getColumnClassRight(currentDiscColumn);
  return $(currentDisc).parent().parent().prev().find(discClassNorthEast);
}

var getSouthWestCell = function(currentDisc) {
  var currentDiscColumn = getCurrentDiscColumn(currentDisc);
  var discClassSouthWest = getColumnClassLeft(currentDiscColumn);
  return $(currentDisc).parent().parent().next().find(discClassSouthWest);
}

var getLeftCell = function(currentDisc) {
  var currentDiscColumn = getCurrentDiscColumn(currentDisc);
  var discColumnClassLeft = getColumnClassLeft(currentDiscColumn);
  return $(currentDisc).parent().parent().find(discColumnClassLeft);
}

var getRightCell = function(currentDisc) {
  var currentDiscColumn = getCurrentDiscColumn(currentDisc);
  var discColumnClassRight = getColumnClassRight(currentDiscColumn);
  return $(currentDisc).parent().parent().find(discColumnClassRight);
}

var diagonalCheck = function(currentDisc, color) {
  if (diagonalCheckLeft(currentDisc, color) == 4 || diagonalCheckRight(currentDisc, color) == 4) {
    return true;
  } else {
    return false;
  }
};

var getColorClass = function(color) {
  return '.' + color;
};

///////////////////////////////////////////LEFT

var diagonalCheckLeft = function(currentDisc, color) {
  var currentWinCount = 1; //counts itself too
  var currentColor = color;
  currentWinCount = diagonalNorthWest(currentDisc, currentWinCount, currentColor);
  currentWinCount = diagonalSouthEast(currentDisc, currentWinCount, currentColor);

  return currentWinCount;
};

var diagonalNorthWest = function(currentDisc, currentWinCount, currentColor) {

  var cellToTheNorthWest = getNorthWestCell(currentDisc);
  var currentPlayerColor = getColorClass(tracker.color);
  var nextDisc = cellToTheNorthWest.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = getNextDiscColor(nextDisc);
  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return diagonalNorthWest(nextDisc, currentWinCount);
  }
};

var diagonalSouthEast = function(currentDisc, currentWinCount, currentColor) {

  //added a + in front of currentDiscColumn to make it an integer
  var cellToTheSouthEast = getSouthEastCell(currentDisc);
  var currentPlayerColor = getColorClass(tracker.color);
  var nextDisc = cellToTheSouthEast.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = getNextDiscColor(nextDisc);
  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return diagonalSouthEast(nextDisc, currentWinCount);
  }
};


//////////////////////////////////////RIGHT


var diagonalCheckRight = function(currentDisc, color) {
  var currentWinCount = 1; //counts itself too
  var currentColor = color;
  currentWinCount = diagonalNorthEast(currentDisc, currentWinCount, currentColor);
  currentWinCount = diagonalSouthWest(currentDisc, currentWinCount, currentColor);

  return currentWinCount;
}

var diagonalNorthEast = function(currentDisc, currentWinCount, currentColor) {

  var cellToTheNorthEast = getNorthEastCell(currentDisc);
  var currentPlayerColor = getColorClass(tracker.color);
  var nextDisc = cellToTheNorthEast.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = getNextDiscColor(nextDisc);
  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return diagonalNorthEast(nextDisc, currentWinCount);
  }
};

var diagonalSouthWest = function(currentDisc, currentWinCount, currentColor) {

  var cellToTheSouthWest = getSouthWestCell(currentDisc);
  var currentPlayerColor = getColorClass(tracker.color);
  var nextDisc = cellToTheSouthWest.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = getNextDiscColor(nextDisc);
  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return diagonalSouthWest(nextDisc, currentWinCount);
  }
};


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

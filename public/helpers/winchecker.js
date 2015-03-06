



var diagonalCheck = function(currentDisc, color) {

  if (diagonalCheckLeft(currentDisc, color) == 4 || diagonalCheckRight(currentDisc, color) == 4) {
    return true;
  } else {
    return false;
  }

}



///////////////////////////////////////////LEFT

var diagonalCheckLeft = function(currentDisc, color) {
  var currentWinCount = 1; //counts itself too
  var currentColor = color;
  currentWinCount = diagonalNorthWest(currentDisc, currentWinCount, currentColor);
  currentWinCount = diagonalSouthEast(currentDisc, currentWinCount, currentColor);

  return currentWinCount;
};

var diagonalNorthWest = function(currentDisc, currentWinCount, currentColor) {

  var currentDiscColumn = $(currentDisc).parent().attr("class");
  var discColumnClassToTheNorthWest = '.' + (currentDiscColumn - 1);
  var cellToTheNorthWest = $(currentDisc).parent().parent().prev().find(discColumnClassToTheNorthWest);

  var currentPlayerColor = '.' + tracker.color;
  var nextDisc = cellToTheNorthWest.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = '.' + nextDisc.attr('class').split(' ')[1];

  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return diagonalNorthWest(nextDisc, currentWinCount);
  }
};

var diagonalSouthEast = function(currentDisc, currentWinCount, currentColor) {

  var currentDiscColumn = $(currentDisc).parent().attr("class");
  //added a + in front of currentDiscColumn to make it an integer
  var discColumnToTheSouthEast = '.' + (+currentDiscColumn + 1);
  var cellToTheSouthEast = $(currentDisc).parent().parent().next().find(discColumnToTheSouthEast);


  var currentPlayerColor = '.' + tracker.color;
  var nextDisc = cellToTheSouthEast.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = '.' + nextDisc.attr('class').split(' ')[1];

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

  var currentDiscColumn = $(currentDisc).parent().attr("class");
  var discColumnClassToTheNorthEast = '.' + (+currentDiscColumn + 1);
  var cellToTheNorthEast = $(currentDisc).parent().parent().prev().find(discColumnClassToTheNorthEast);

  var currentPlayerColor = '.' + tracker.color;
  var nextDisc = cellToTheNorthEast.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = '.' + nextDisc.attr('class').split(' ')[1];

  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return diagonalNorthEast(nextDisc, currentWinCount);
  }
};

var diagonalSouthWest = function(currentDisc, currentWinCount, currentColor) {

  var currentDiscColumn = $(currentDisc).parent().attr("class");
  var discColumnToTheSouthWest = '.' + (currentDiscColumn - 1); //column
  var cellToTheSouthWest = $(currentDisc).parent().parent().next().find(discColumnToTheSouthWest); //row

  var currentPlayerColor = '.' + tracker.color;
  var nextDisc = cellToTheSouthWest.find(currentPlayerColor);

  if (nextDisc.length === 0) {
    return currentWinCount;
  }

  var nextDiscColor = '.' + nextDisc.attr('class').split(' ')[1];

  if (currentPlayerColor === nextDiscColor) {
    currentWinCount++;
    return diagonalSouthWest(nextDisc, currentWinCount);
  }
};


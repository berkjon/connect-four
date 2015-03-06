
var verticalChecker = function(currentDisc, currentColor) {
  currentWinCount = 1;
  verticalHelper(currentDisc, currentColor);

  if (currentWinCount >= 4) {
    return true;
  } else {
    return false;
  }
}

var getCurrentColumn = function(currentDisc) {
  return $(currentDisc).parent().attr('class');
}

var getNextRow = function(currentDisc) {
  return $(currentDisc).parent().parent().next();
}

var getNextDisc = function(currentDisc, nextRow) {
  currentColumnClass = '.' + getCurrentColumn(currentDisc);
  return nextRow.find(currentColumnClass).children(':first-child')
}

var verticalHelper= function(currentDisc, currentColor) {

  nextRow = getNextRow(currentDisc);
  nextDisc = getNextDisc(currentDisc, nextRow);

  if (nextRow.length === 0) {
    return currentWinCount;
  }

  if ( $(nextDisc).attr('class').match(currentColor) ) {
    currentWinCount++;
    return verticalHelper(nextDisc);
  } else {
    return currentWinCount;
  }

}
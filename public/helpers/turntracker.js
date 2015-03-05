
/// helper \\\

var Tracker = function() {
  this.color = "red";
  this.counter = 0;
}

Tracker.prototype.turnColor = function() {
  if (counter % 2 === 0) {
    this.color = "red";
  } else {
    this.color = "black";
  }
  this.counter + 1;
}

//\\\ end helper ///

/// called from main JS file \\\\
tracker = new Tracker;
tracker.color // passed in as argument to set div class.
tracker.turnColor(); // called after click to change turn.


// var turnTracker = function() {
//   if (counter % 2 === 0) {
//     var color = "red";
//   } else {
//     var color = "black";
//   }
//     counter + 1;

// }

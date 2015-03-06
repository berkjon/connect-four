
/// helper \\\

var Tracker = function() {
  this.color = "red";
  this.counter = 0;
}

Tracker.prototype.turnColor = function() {
  this.counter++;
  if (this.counter % 2 === 0) {
    this.color = "red";
  } else {
    this.color = "black";
  }
}



//\\\ end helper ///

// /// called from main JS file \\\\
// tracker = new Tracker;
// tracker.color // passed in as argument to set div class.
// tracker.turnColor(); // called after click to change turn.


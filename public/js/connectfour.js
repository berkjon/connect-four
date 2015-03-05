
//Overall put disks into appropriate column
//column class names: one two three four five six seven

//pseudocode:

//initialize turn counter = 0;
  //even: red;
  //odd: black;


//board object
  //contains diskss

//disks object
  //contains color

//click event for columns
  // IF class that we click on is a certain column class
    // IF column has space
      // placement = HEIGHT - CURRENT_NUMBER_OF_DISKS
        // HOW TO FIND APPROPRIATE TR
        // USE nth-child or children()[placement]
      // PLACE disk AT placement (TR number class)
        // .css() to change background-color to 'red' if % 0 or 'black' if % 1


  // add 1 to counter of the click event (global scope)



$("table").on('click', '.one', function(e) {
  console.log("inside");
  $(this).find(":first-child").addClass("red")
  // debugger
  // this.countDiscsInColumn();
  // this.placeDisc();
});

// var countDiscsInColumn = function() {
//   this.find();
// }

// var placeDisc = function() {

// }


// var Board = function() {
//   this.counter = 0;
//   this.win = false;
// }

// my_board = new Board();
// my_board.counter;


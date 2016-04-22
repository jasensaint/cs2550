//board state object with array

var board = {
  cells: [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
};


// get the number in a cell
function getNumber(args)
{
  //console.log(args);
  var i = arguments[0];
  var j = arguments[1];
  //var board = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,7,0,0,0,0],[0,3,1,8,6,9,0,0,0],[2,0,1,3,0,0,0,8,0],[0,5,0,9,0,0,3,4,0],[0,7,0,0,0,0,0,0,0],[0,6,4,0,0,3,0,1,0],[0,0,5,0,0,0,0,0,8],[0,1,0,6,9,2,0,5,7]];
  //return board[i][j];
  //console.log(board.cells[i][j]);
  return board.cells[i][j];
}

function loadSampleBoard(diff)
{
  var localRequest = new XMLHttpRequest();

  // PASSING false AS THE THIRD PARAMETER TO open SPECIFIES SYNCHRONOUS
  localRequest.open("GET", "sample.json", false);
  localRequest.setRequestHeader("Content-Type", "json");
  localRequest.send();


    var responseJson = JSON.parse(localRequest.responseText);
    console.log(responseJson);
    console.log(responseJson["result"]);
    console.log(responseJson[diff]);

      board.cells = responseJson[diff];
      showGrid.apply(this);

// easy 1&2 Puzzle //http://www.puzzles.ca/sudoku_puzzles/sudoku_easy_225.html
// easy 1&2 Solution //http://www.puzzles.ca/sudoku_puzzles/sudoku_easy_225_solution.html
// med 1&2 Puzzle http://www.puzzles.ca/sudoku_puzzles/sudoku_medium_243.html
// med 1&2 Solution http://www.puzzles.ca/sudoku_puzzles/sudoku_medium_243_solution.html
// hard 1&2 Puzzle http://www.puzzles.ca/sudoku_puzzles/sudoku_hard_239.html
// hard 1&2 Solution http://www.puzzles.ca/sudoku_puzzles/sudoku_hard_239_solution.html
}

// enter number

function enterNumber(section, cell, enteredNum)
{

  //console.log(enteredNum);
  board.cells[section - 1][cell - 1] = enteredNum;
  console.log("array: " +   board.cells[section][cell]);

  checkComplete();
}
//game complete logic
// to test if the rows are complete uncommment the console.logs
function checkComplete()
{
  document.getElementById("badNumberStatus").innerHTML = "";
  var totalComplete = 0;
  var complete = 0;

  //Logic Check for rows
  for(var i = 0; i < 9; i++)
  {
    // keeps track of the quanitiy of the numbers 1- 9 in an array numberComplete.
    var numberComplete = [0,0,0,0,0,0,0,0,0,0];
    for(var j = 0; j < 9; j++)
    {
      // this converts the section and row into a grid system.
      var x = Math.floor(j / 3) + (Math.floor(i / 3) * 3);
      //console.log("x:" + x);

      var y = (j % 3) + ((i % 3) * 3);
      //console.log("y:" + y);

      //uses a grid system to access the correct cells.
      var z = board.cells[x][y];
      //console.log("x:" + x + "y:" + y +"z:" + z);

      // takes the value in the cell and increments the array place holder.
      numberComplete[z]++;
    }
    //console.log(numberComplete);

    for (var testNums = 1; testNums <= 9; testNums++)
    {
      if(numberComplete[testNums] < 1)
      {

        console.log("there are no " + testNums + "on row " + i);
      }
      else if(numberComplete[testNums] > 1)
      {
        console.log("there are too many " + testNums + "on row " + i);
        document.getElementById("badNumberStatus").innerHTML +=  "there are too many " + testNums + " on row " + (i+1) + "<br>";

      }
      else if (numberComplete[testNums] == 1)
      {
        complete++;
      }
    }
  }


  // complete check for columns
  for(var j = 0; j < 9; j++)
  {
    // keeps track of the quanitiy of the numbers 1- 9 in an array numberComplete.
    var numberComplete = [0,0,0,0,0,0,0,0,0,0];
    for(var i = 0; i < 9; i++)
    {
      // this converts the section and row into a grid system.
      var x = Math.floor(j / 3) + (Math.floor(i / 3) * 3);
      //console.log("x:" + x);

      var y = (j % 3) + ((i % 3) * 3);
      //console.log("y:" + y);

      //uses a grid system to access the correct cells.
      var z = board.cells[x][y];
      //console.log("x:" + x + "y:" + y +"z:" + z);

      // takes the value in the cell and increments the array place holder.
      numberComplete[z]++;
    }
    //console.log(numberComplete);

    for (var testNums = 1; testNums <= 9; testNums++)
    {
      if(numberComplete[testNums] < 1)
      {
        console.log("there are no " + testNums + "on column " + j);
      }
      else if(numberComplete[testNums] > 1)
      {
        console.log("there are too many " + testNums + "on column " + j);
        document.getElementById("badNumberStatus").innerHTML +=  "there are too many " + testNums + " in column " + (j+1) + "<br>";

      }
      else if (numberComplete[testNums] == 1)
      {
        complete++;
      }
    }
  }


  // complete check for section
  for(var x = 0; x < 9; x++)
  {
    // keeps track of the quanitiy of the numbers 1- 9 in an array numberComplete.
    var numberComplete = [0,0,0,0,0,0,0,0,0,0];
    for(var y = 0; y < 9; y++)
    {

      //uses a grid system to access the correct cells.
      var z = board.cells[x][y];
      //console.log("x:" + x + "y:" + y +"z:" + z);

      // takes the value in the cell and increments the array place holder.
      numberComplete[z]++;
    }
    //console.log(numberComplete);

    for (var testNums = 1; testNums <= 9; testNums++)
    {
      if(numberComplete[testNums] < 1)
      {
        console.log("there are no " + testNums + "in section " + x);
      }
      else if(numberComplete[testNums] > 1)
      {
        console.log("there are too many " + testNums + "in section " + x);
        document.getElementById("badNumberStatus").innerHTML +=  "there are too many " + testNums + " in section " + (x+1) + "<br>";
      }
      else if (numberComplete[testNums] == 1)
      {
        complete++;
      }
    }
  }
  console.log(complete);
  if(complete == 243)
  {
    stop();
    drawStar();
    alert("Congratulations! You completed the Sudoku game!");
  }
}

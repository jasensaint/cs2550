//board state object with array

var board = {
  cells: [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
};

// setup board
function loadBoard(difficulty)
{
  if(difficulty == "easy")
  {
    //http://www.puzzles.ca/sudoku_puzzles/sudoku_easy_225_solution.html
    var cells = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,7,0,0,0,0],[0,3,1,8,6,9,0,0,0],[2,0,1,3,0,0,0,8,0],[0,5,0,9,0,0,3,4,0],[0,7,0,0,0,0,0,0,0],[0,6,4,0,0,3,0,1,0],[0,0,5,0,0,0,0,0,8],[0,1,0,6,9,2,0,5,7]];

  }
  else if(difficulty == "med")
  {

  }
  else if(difficulty == "hard")
  {

  }
  else if(difficulty == "reset")
  {
    var cells = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
  }
}

// get the number in a cell
function getNumber(args)
{
  //console.log(args);
  var i = arguments[0];
  var j = arguments[1];
  var board = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,7,0,0,0,0],[0,3,1,8,6,9,0,0,0],[2,0,1,3,0,0,0,8,0],[0,5,0,9,0,0,3,4,0],[0,7,0,0,0,0,0,0,0],[0,6,4,0,0,3,0,1,0],[0,0,5,0,0,0,0,0,8],[0,1,0,6,9,2,0,5,7]];
  return board[i][j];
  //return board.cells[i][j];
}

// enter number

function enterNumber(section, cell, enteredNum)
{
  cells[section][cell] = enteredNum;
  checkComplete();
}
//game complete logic


function checkComplete()
{

}

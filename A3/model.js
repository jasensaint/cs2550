//board state object with array

var board = {
  cells: [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
};



// setup board
function loadBoard(difficulty)
{
  console.log(difficulty);
  if(difficulty == "easy")
  {
    //http://www.puzzles.ca/sudoku_puzzles/sudoku_easy_225_solution.html
    var easyBoard = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,7,0,0,0,0],[0,3,1,8,6,9,0,0,0],[2,0,1,3,0,0,0,8,0],[0,5,0,9,0,0,3,4,0],[0,7,0,0,0,0,0,0,0],[0,6,4,0,0,3,0,1,0],[0,0,5,0,0,0,0,0,8],[0,1,0,6,9,2,0,5,7]];

    for (var i = 0; i < 9; i++)
    {
      for (var j = 0; j < 9; j++)
      {
        board.cells[i][j] = easyBoard[i][j];
      }
    }
    //console.log(board.cells[1][4]);
    showGrid.apply(this);
  }
  else if(difficulty == "med")
  {
    var medBoard = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];

    for (var i = 0; i < 9; i++)
    {
      for (var j = 0; j < 9; j++)
      {
        board.cells[i][j] = medBoard[i][j];
      }
    }
    showGrid.apply(this);

  }
  else if(difficulty == "hard")
  {
    var hardBoard = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];

    for (var i = 0; i < 9; i++)
    {
      for (var j = 0; j < 9; j++)
      {
        board.cells[i][j] = hardBoard[i][j];
      }
    }
    showGrid.apply(this);

  }
  else if(difficulty == "blank")
  {
    var blankBoard = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];

    for (var i = 0; i < 9; i++)
    {
      for (var j = 0; j < 9; j++)
      {
        board.cells[i][j] = blankBoard[i][j];
      }
    }
    showGrid.apply(this);
  }
}

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

// enter number

function enterNumber(section, cell, enteredNum)
{
  board.cells[section][cell] = enteredNum;
  checkComplete();
}
//game complete logic


function checkComplete()
{

}

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
    console.log(board.cells[3][2]);
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
  //console.log(enteredNum);
  board.cells[section][cell] = enteredNum;
  checkComplete();
}
//game complete logic

function checkComplete()
{
  for(var i = 0; i < 9; i++)
  {
    var numberComplete = [0,0,0,0,0,0,0,0,0];
    for(var j = 0; j < 9; j++)
    {
      var x = Math.floor(j / 3) + (Math.floor(i / 3) * 3);
      //console.log("x:" + x);
      var y = (j % 3) + ((i % 3) * 3);
      //console.log("y:" + y);
      var z = board.cells[x][y];
      //console.log(z);
      numberComplete[z]++;
    }
    for (var testNums = 0; testNums < 9; testNums++)
    {
      if(numberComplete[testNums] < 1)
      {
        console.log("there are no " + testNums + "on row " + i)
      }
      else if(numberComplete[testNums] > 1)
      {
        console.log("there are too many " + testNums + "on row " + i)
      }
    }

  }



}
/*
function checkComplete()
{
  var row1, row2, row3, row4, row5, row6, row7, row8, row9 = [];
  var rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9];

  row1 = [board.cells[0][0],board.cells[0][1],board.cells[0][2],boards.cells[1][0],boards.cells[1][1],boards.cells[1][2],boards.cells[2][0],boards.cells[2][1],boards.cells[2][2]];
  var v = 0;
  for (var u = 0; u < 9; u++)
  {
     v =+ 3;
    {
      for (var x = 0; x < 3; x++)
      {
        for (var y = 0; y < 3; y++)
        {
          rows[u].push(board.cells[x+u][y+v]);
        }
      }
    }
    checkOne2Nine(rows[u]);
  }
}
*/
function checkOne2Nine(chunck)
{
  for(var i = 0; i < 9; i++)
  {
    if (chunck[i] == 1)
    {
      true1 = true;

    }
    else if(chunck[i] == 2)
    {
      true2 = true;
    }
    else if(chunck[i] == 3)
    {
      true3 = true;
    }
    else if(chunck[i] == 4)
    {
      true4 = true;
    }
    else if(chunck[i] == 5)
    {
      true5 = true;
    }
    else if(chunck[i] == 6)
    {
      true6 = true;
    }
    else if(chunck[i] == 7)
    {
      true7 = true;
    }
    else if(chunck[i] == 8)
    {
      true8 = true;
    }
    else if(chunck[i] == 9)
    {
      true9 = true;
    }
    else
    {
      //a cell with 0 should break the loop.
      return false;
    }
    if (true1 == true && true2 == true && true3 == true && true4 == true && true5 == true && true6 == true && true7 == true && true7 == true && true8 == true && true9 == true)
    {
        return true;
    }
  }
}

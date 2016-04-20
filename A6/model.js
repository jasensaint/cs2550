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

function loadSampleBoard()
{
  var localRequest = new XMLHttpRequest();

  // PASSING false AS THE THIRD PARAMETER TO open SPECIFIES SYNCHRONOUS
  localRequest.open("GET", "sample.json", false);
  localRequest.setRequestHeader("Content-Type", "json");
  localRequest.send();


    var responseJson = JSON.parse(localRequest.responseText);
    console.log(responseJson);
    console.log(responseJson["result"]);
    console.log(responseJson.sampleBoard);
    board.cells = responseJson.sampleBoard;
    showGrid.apply(this);

// ***instructions said we could use jquery but the grading said we had to use request...
/*
  var test = this;
			jQuery.ajax({
				url: 'sample.json',
				method: 'GET',
        dataType: "json",

				success: function(data) {
          //alert(data.sampleBoard);
          board.cells = data.sampleBoard;
          showGrid.apply(this);
				}
			});
  */

}





// enter number

function enterNumber(section, cell, enteredNum)
{
  //console.log(enteredNum);
  board.cells[section][cell] = enteredNum;
  console.log("array: " +   board.cells[section][cell]);
  checkComplete();
}
//game complete logic
// to test if the rows are complete uncommment the console.logs
function checkComplete()
{
  for(var i = 0; i < 9; i++)
  {
    // keeps track of the quanitiy of the numbers 1- 9 in an array numberComplete.
    var numberComplete = [0,0,0,0,0,0,0,0,0];
    for(var j = 0; j < 9; j++)
    {
      // this converts the section and row into a grid system.
      var x = Math.floor(j / 3) + (Math.floor(i / 3) * 3);
      //console.log("x:" + x);
      var y = (j % 3) + ((i % 3) * 3);
      //console.log("y:" + y);

      //uses a grid system to access the correct cells.
      var z = board.cells[x][y];
      //console.log(z);

      // takes the value in the cell and increments the array place holder.
      numberComplete[z]++;
    }
    //console.log(numberComplete);

    for (var testNums = 0; testNums < 9; testNums++)
    {
      if(numberComplete[testNums] < 1)
      {
        //console.log("there are no " + testNums + "on row " + i)
      }
      else if(numberComplete[testNums] > 1)
      {
        //console.log("there are too many " + testNums + "on row " + i)
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

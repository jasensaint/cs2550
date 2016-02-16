function showGrid(){
  var showDiv = document.getElementById("gridDiv");
  showDiv.innerHTML = makeBoard(3, 3);
}

function makeBoard(rows, columns){
  var html = "";
  var h = 0;
  var i = 0;
  var j = 1;

html += "<table border='5'>";
  for (h = 0; h < rows; h++)
  {
    html += "<tr>";
    for (i = 0; i < columns; i++)
    {
      if (j % 2 == 0)
      {
        cssShadeClass = "class='shadeSection'";
      }
      else {
        cssShadeClass = "";
      }
      html += "<td width='100px' height='100px'><div " + cssShadeClass + "id='section" + j + "'>" + makeGrid(3, 3) + "</td>";
      j++;
    }
    html += "</tr>";
  }
html += "</table>";
return html;
}

function makeGrid(rows, columns) {
  var html = "";
  var h = 0;
  var i = 0;
  var j = 1;
  var cssShadeClass = "";


html += "<table border='2'>";
  for (h = 0; h < rows; h++)
  {
    html += "<tr>";
    for (i = 0; i < columns; i++)
    {

      html += "<td width='30px' height='30px' align='center'><div contenteditable='true' id='cell" + j + "'>1</td>";
      j++;
    }
    html += "</tr>";
  }
html += "</table>";
return html;
}

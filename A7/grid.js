function showGrid(){
  var showDiv = document.getElementById("gridDiv");
  showDiv.innerHTML = makeBoard(3, 3);
}

function changeValue() {
++s;
//math for timer
h = Math.floor(s/2400);
tempTime = s%2400;
m = Math.floor(tempTime/60)
tempTime = tempTime%60;

//sets variables for printing out the timer.
h1 = Math.floor(h/10);
h2 = h%10;
m1 = Math.floor(m/10);
m2 = m%10;
s1 = Math.floor(tempTime/10);
s2 = tempTime%10;

document.getElementById("gameClock").innerHTML = "" + h1 + h2 + ":" + m1 + m2 + ":" + s1 + s2;

}

var timerInterval = null;

function start () {
stop();
s = 0;
m = 0;
h = 0;
s1 = 0;
s2 = 0;
m1 = 0;
m2 = 0;
h1 = 0;
h2 = 0;
timerInterval = setInterval(changeValue, 1000);
}

var stop = function() {
clearInterval(timerInterval );
}

function makeBoard(rows, columns){
  var html = "";
  var h = 0;
  var i = 0;
  var j = 1;

html += "<input type='text' id='sectionDisplay' value=''><input type='text' id='cellDisplay' value=''>"
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
      html += "<td width='100px' height='100px'><div " + cssShadeClass + "id='section" + j + "'>" + makeGrid(3, 3, j) + "</td>";
      j++;
    }
    html += "</tr>";
  }
html += "</table>";
return html;
}

function makeGrid(rows, columns, section) {
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
      //console.log(section);
      //console.log(j);
      var args = [section - 1, j - 1];
      //console.log(args);
      html += "<td width='30px' height='30px' align='center'><div onclick='changeColor(this, &apos;red&apos;)' contenteditable='true' id='cell" + j + "'>" + getNumber.apply(this, args) + "</td>";
      j++;
    }
    html += "</tr>";
  }
html += "</table>";
return html;
}

function displaySolution(diff)
{
  document.getElementById("solution").innerHTML = "<img src= " + diff + ".gif alt='Sudoku solution'>";
  console.log(diff);

}

function changeColor(elmnt, clr)
{
    elmnt.style.color = clr;

    var sec = elmnt.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    sec = sec.substring(sec.length - 1, sec.length);
    var cel = elmnt.id;
    cel = cel.substring(cel.length - 1, cel.length);
    //var val = elmnt.innerHTML;
    //console.log(val);

    document.getElementById("sectionDisplay").value = elmnt.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    document.getElementById("cellDisplay").value = elmnt.id;
    elmnt.innerHTML++;
    console.log("s:" + sec);
    console.log("c:" + cel);
    enterNumber(sec, cel, elmnt.innerHTML);
}

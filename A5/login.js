// verify login
function displaySession()
{
    document.getElementById('sessionInfo').innerHTML = localStorage.getItem("cs2550timestamp");
}

function checkLogin()
{
  console.log("test" + localStorage.userName);
  var name = document.getElementById("userName").value;
  var pass = document.getElementById("password").value;
  var data = "userName=" + name + "&password=" + pass;
  var localRequest = new XMLHttpRequest();

  // PASSING false AS THE THIRD PARAMETER TO open SPECIFIES SYNCHRONOUS
  localRequest.open("POST", "http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php", false);
  localRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  localRequest.send(data);

  if (localRequest.status == 200) {
    var responseJson = JSON.parse(localRequest.responseText);
    console.log(responseJson);
    console.log(responseJson["result"]);

    if(responseJson["result"] == 'valid')
    {
      var store = responseJson["userName"] + " " + responseJson["timestamp"];
      document.getElementById('loginMessage').innerHTML = "login successful.";
      localStorage.setItem("cs2550timestamp", store);
      console.log(localStorage.getItem("cs2550timestamp"));
      //alert( 'Stored timeStamp: ' + localStorage.cs2550timestamp );
      //document.location = 'grid.html';
      window.open("./grid.html");
    }
    else
    {
      document.getElementById('loginMessage').innerHTML = "login NOT successful.";
    }
  }
}

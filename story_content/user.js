function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jIYFdwGdFI":
        Script1();
        break;
      case "5zgZYSvRlhS":
        Script2();
        break;
      case "6aw0696jLRB":
        Script3();
        break;
      case "5rvEDnmjVBx":
        Script4();
        break;
      case "65wYoYlYrdn":
        Script5();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyYIwFZ0kRP28wWDqyGhPg3q-gKs6fvqF-o15DLq0mSRggiQxKW/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "FECHA" : new Date().toJSON().slice(0,2),
 "PAGO" : player.GetVar("pago")
}
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyYIwFZ0kRP28wWDqyGhPg3q-gKs6fvqF-o15DLq0mSRggiQxKW/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "NOMBRE" : player.GetVar("Nom")
}
}

function Script3()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyYIwFZ0kRP28wWDqyGhPg3q-gKs6fvqF-o15DLq0mSRggiQxKW/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "DIAP VIS" : player.GetVar("VIS"),
 "DIAP TOT" : player.GetVar("TOT")
}
}

function Script4()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script5()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}


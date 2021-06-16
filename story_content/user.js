function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61aS31JVNid":
        Script1();
        break;
      case "5W8hLYFddCB":
        Script2();
        break;
      case "6APnof6jV9p":
        Script3();
        break;
      case "5bOMhY5dyKH":
        Script4();
        break;
      case "5rRSF6hVMn4":
        Script5();
        break;
      case "6jlhll5j6sV":
        Script6();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var d = new Date();
var h = {hour:'2-digit', minute:'2-digit', second:'2-digit'};
var o={year:'numeric', month:'2-digit', day:'2-digit'};

//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzZqlH28OADqjsvvUzgxehqULZ6oINDCB1surI9GzIqOZS6qyOl/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "FECHA" : d.toLocaleDateString('en-US', o),
 "HORA" : d.toLocaleDateString('en-US', h)
}
}

function Script2()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script3()
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

function Script4()
{
  var player = GetPlayer();

var d = new Date();
var o = {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'};


//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxmI3_ChJDxW3Ae2MCU-ROktunN-VwiZJd8n5siYNx2bKf5Oa0/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "FECHA" : d.toLocaleDateString('en-US', o), //STORE DATE
 "PAGO" : player.GetVar("pago"),
 "NOMBRE" : player.GetVar("Nom"),
 "DIAP VIS" : player.GetVar("VIS"),
 "DIAP TOT" : player.GetVar("TOT")
}
}

function Script5()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script6()
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


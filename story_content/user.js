function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZRaBHm0RjI":
        Script1();
        break;
      case "67dv97lWBHb":
        Script2();
        break;
      case "5cQegMz8192":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var o = {hour:'2-digit', minute:'2-digit', second:'2-digit'};

//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwr6isxAZ8iJOL_WaaaQpGgF0t7Yk7FJ20oyDs5yZQ1ImTcIvI/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "FECHA" : new Date().toJSON().slice(0,10),
  "HORA" : o.toJSON().slice(0,10),
 "PAGO" : player.GetVar("pago"),
 "NOMBRE" : player.GetVar("Nom"),
 "DIAP VIS" : player.GetVar("VIS"),
 "DIAP TOT" : player.GetVar("TOT")
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


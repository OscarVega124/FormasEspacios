function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mMLYC8gTyC":
        Script1();
        break;
      case "65WVy6aJ8OT":
        Script2();
        break;
      case "5pnfnDDW5x5":
        Script3();
        break;
      case "6lbbZOQ2Bnm":
        Script4();
        break;
      case "6j5q5Ou0GJg":
        Script5();
        break;
      case "5zN252FEB3Q":
        Script6();
        break;
      case "6X1t94dNLQD":
        Script7();
        break;
      case "6p8MJwgtA1W":
        Script8();
        break;
      case "6nW07VHM5i1":
        Script9();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzKgiKYKyKhWXLZnBLO0v9vf1JSmZS7s6KYjGeEta9tcVZ4UPZR/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "FECHA" : new Date().toJSON().slice(0,10),
 "PAGO" : player.GetVar("pago")
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
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzKgiKYKyKhWXLZnBLO0v9vf1JSmZS7s6KYjGeEta9tcVZ4UPZR/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "NOMBRE" : player.GetVar("Nom"),
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

function Script7()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzKgiKYKyKhWXLZnBLO0v9vf1JSmZS7s6KYjGeEta9tcVZ4UPZR/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "DIAP VIS" : player.GetVar("VIS"),
 "DIAP TOT" : player.GetVar("TOT")
}
}

function Script8()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script9()
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


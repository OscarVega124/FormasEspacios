function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mbb5yFB1Fu":
        Script1();
        break;
      case "6pWga6ImA4c":
        Script2();
        break;
      case "5rN0pzrUYSI":
        Script3();
        break;
      case "5wXw6hLbk6c":
        Script4();
        break;
      case "6hoGIvj5lg9":
        Script5();
        break;
      case "6nYGad6aod3":
        Script6();
        break;
      case "5sclKWeyOjW":
        Script7();
        break;
      case "6ewtRr1SybE":
        Script8();
        break;
      case "6bi67fLYOBd":
        Script9();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var d = new Date();
var o = {hour:'2-digit', minute:'2-digit', second:'2-digit'};
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbygKeebv1BWOfjh5DjKHJegcTpCdSnlGQgPwzYAAfGIbIZLR9Vv/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "HORA INICIO" : d.toLocaleDateString('en-US', o)
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
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwdI5wa1OSdoMX1tksr2OzBqoOFmZYQjs67EAO_TCCwwOk99BU/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
  "MATRICULA" : player.GetVar("Matricula"),
  "NOMBRE" : player.GetVar("Nombre"),
  "NIVEL ACADEMICO" : player.GetVar("NivelEstudios"),
  "INSTITUCION" : player.GetVar("Institucion"),
  "SEMESTRE" : player.GetVar("Semestres")
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
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script8()
{
  var player = GetPlayer();

var d = new Date();
var o = {hour:'2-digit', minute:'2-digit', second:'2-digit'};
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxeyh3zhG_QrgGPxlEiUzR42frYCEns61Ml7JvoEid-XZOfqG8d/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
  "DIAPOSITIVA VISUALISADAS" : player.GetVar("VIS"),
  "TOTAL DE DIAPOSITIVAS" : player.GetVar("TOT"),
  "HORA SALIDA" : d.toLocaleDateString('en-US', o)
}
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


function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fQWGHVH2rd":
        Script1();
        break;
      case "5lzkrlwoHO2":
        Script2();
        break;
      case "6S1PkI9zY1K":
        Script3();
        break;
      case "5zf9GNaKJfA":
        Script4();
        break;
      case "5fbxNvDldCq":
        Script5();
        break;
      case "6cLukqs4wFL":
        Script6();
        break;
  }
}

function Script1()
{
  var d = new Date();
var hour = d.getHours()
var minute = d.getMinutes()
var tiem = hour + ":" + minute
var player = GetPlayer();
player.SetVar("inicio",tiem);
}

function Script2()
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

function Script3()
{
  var d = new Date();
var hour = d.getHours()
var minute = d.getMinutes()
var tiem = hour + ":" + minute
var player = GetPlayer();
player.SetVar("final",tiem);
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
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw7-dJpAPCbLJdfgbANQV_HvNr-9eUi9vU28XVrze5EbcDeBYw/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
  "FECHA" : new Date().toJSON().slice(0,10), //STORE DATE
  "MATRICULA" : player.GetVar("Matricula"),
  "NOMBRE" : player.GetVar("Nombre"),
  "NIVEL ACADEMICO" : player.GetVar("NivelEstudios"),
  "INSTITUCION" : player.GetVar("Institucion"),
  "SEMESTRE" : player.GetVar("Semestres"),
  "DIAPOSITIVA VISUALISADAS" : player.GetVar("VIS"),
  "DIAPOSITIVA TOTAL" : player.GetVar("TOT"),
  "HORA SALIDA" : player.GetVar("final"),
  "HORA INICIO" : player.GetVar("inicio")
}
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


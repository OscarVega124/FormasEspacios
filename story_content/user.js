function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NhftSB8muE":
        Script1();
        break;
      case "5pTRiYRmR2F":
        Script2();
        break;
      case "5bCTHKqIsQv":
        Script3();
        break;
      case "6Im1mrqDiga":
        Script4();
        break;
      case "6ibAZOAUzKV":
        Script5();
        break;
      case "5vjjw8w3jh8":
        Script6();
        break;
      case "61zSRXyyby4":
        Script7();
        break;
      case "5gIxuB9oJVc":
        Script8();
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
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=day + "/" + month + "/" + year
var player = GetPlayer();
player.SetVar("fechainicio",dateString);

}

function Script3()
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

function Script4()
{
  var d = new Date();
var hour = d.getHours()
var minute = d.getMinutes()
var tiem = hour + ":" + minute
var player = GetPlayer();
player.SetVar("final",tiem);
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=day + "/" + month + "/" + year
var player = GetPlayer();
player.SetVar("fechasalida",dateString);

}

function Script6()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw7-dJpAPCbLJdfgbANQV_HvNr-9eUi9vU28XVrze5EbcDeBYw/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
  "FECHA INICIO" : player.GetVar("fechainicio"),
  "HORA INICIO" : player.GetVar("inicio"),
  "FECHA SALIDA" : player.GetVar("fechasalida"),
  "HORA SALIDA" : player.GetVar("final"),
  "MATRICULA" : player.GetVar("Matricula"),
  "NOMBRE" : player.GetVar("Nombre"),
  "NIVEL ACADEMICO" : player.GetVar("NivelEstudios"),
  "INSTITUCION" : player.GetVar("Institucion"),
  "SEMESTRE" : player.GetVar("Semestres"),
  "DIAPOSITIVA VISUALISADAS" : player.GetVar("VIS"),
  "DIAPOSITIVA TOTAL" : player.GetVar("TOT")
  
  
}
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


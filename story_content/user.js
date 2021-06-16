function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6qYkF86zk88":
        Script1();
        break;
      case "6AnB5NfVMFf":
        Script2();
        break;
      case "6rJzMltn9Zq":
        Script3();
        break;
  }
}

function Script1()
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


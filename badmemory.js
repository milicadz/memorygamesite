var boje = [
  "red",
  "black",
  "blue",
  "green",
  "brown",
  "grey",
  "orange",
  "pink",
  "red",
  "black",
  "blue",
  "green",
  "brown",
  "grey",
  "orange",
  "pink",
]; 
function priprema(){
  var i, pom;
  for (i = 0; i < 16; i++) {
    var j = Math.round(Math.random() * 15);
    pom = boje[i];
    boje[i] = boje[j];
    boje[j] = pom;
  }
}
function igrica() {
  location.replace("badmemory2.html");
}
function pravila() {
  location.replace("");
}
let prva = null;
let druga = null;
let brparova = 0;
function dugmeKliknuto(self, num){
  if(prva == null){
    prva = self;
    self.style.backgroundColor = boje[num];
  }
  else if(prva != null && druga == null){
    druga = self;
    self.style.backgroundColor = boje[num];
    if(prva.style.backgroundColor == druga.style.backgroundColor){
      prva = null;
      druga = null;
      brparova++;
      if(brparova == 8){
        alert("Kraj");
      }
    }
    else{
      setTimeout(function(){
        prva.style.backgroundColor = "";
        druga.style.backgroundColor = "";
        prva = null;
        druga = null;
      }
      ,2000)
    }
  }
}
function dodeliKlik() {
  let nizDugmica = document.getElementsByClassName("igrica_dugme");
  for (let i = 0; i < nizDugmica.length; i++) {
    nizDugmica[i].addEventListener("click", function () { dugmeKliknuto(nizDugmica[i], i) });
  }
}

let myFaves = document.getElementById("myFaves");
let things = ["plants", "reeses", "mangos", "cats", "beaches", "wine"];



for (var i = 0; i < 5; i++) {
    let item = things[i];
   myFaves.innerHTML += item + ", are one of my favorite things <br />";
      
}
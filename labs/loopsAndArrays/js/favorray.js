/* Jymilee Wyndle 
Travis Faas 
N220 Section 24603
October 10, 2022  */

let myFaves = document.getElementById("myFaves"); //create variable to select id
let things = ["plants", "reeses", "mangos", "cats", "beaches", "wine"]; //create array with favorite items



for (var i = 0; i < 5; i++) { //for loop to select all items
    let item = things[i]; //create variable to select each item
   myFaves.innerHTML += item + ", are one of my favorite things <br />"; //write out each item + "are one of my favorite things" with a break in between
      
}
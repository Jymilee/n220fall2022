/* Jymilee Wyndle 
N220 Section 24603 
Travis Faas 
November 3, 2022 */


//reference id's from html
let checkNum = document.getElementById("checkNum");
let box = document.getElementById("box");

//create function that generates a random number
function rando(ten) {
    return Math.floor(Math.random()*ten); //set parameter to be the multiply value
}

//create function that invokes the other function with a parameter of 11
function check() {
    box.innerHTML = rando(11); //display number to div
}
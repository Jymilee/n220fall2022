/* Jymilee Wyndle
   N220 Section 24603
   Travis Faas
   November 26, 2022 */

/* This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, 
   the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, 
   pressing +red buttons will change the div to a purple color.

   9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
   1 div that will change colors to the rgb color calculated
   
   1 div that shows the current calculated rgb color
   
   You must use attributes on the buttons for the values to change the colors by. */


let dvMain = document.getElementById("dvMain");
let dvCalculations = document.getElementById("dvCalculations");

let red = document.getElementsByClassName("red");
let green = document.getElementsByClassName("green");
let blue = document.getElementsByClassName("blue");


let r = 0;
let g = 0;
let b = 0;



dvMain.style.height = "200px";
dvMain.style.width = "600px";
dvMain.style.margin = "5px";
dvMain.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;



dvCalculations.style.height = "50px";
dvCalculations.style.width = "300px";
dvCalculations.style.margin = "20px";
dvCalculations.innerHTML = "Current color: rgb(0, 0, 0)";



for(i = 0; i < red.length; i++) {
    red[i].addEventListener("click", changeRed);
}



function changeRed(event) {
    let addRed = Number(event.target.dataset.red);
    r += addRed;
    dvMain.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    dvCalculations.innerHTML = dvMain.style.getPropertyValue('background-color');
}



for(i = 0; i < green.length; i++) {
    green[i].addEventListener("click", changeGreen);
}


function changeGreen(event) {
    let addGreen = Number(event.target.dataset.green);
    g += addGreen;
    dvMain.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    dvCalculations.innerHTML = dvMain.style.getPropertyValue('background-color');
}



for(i = 0; i < blue.length; i++) {
    blue[i].addEventListener("click", changeBlue);
}



function changeBlue(event) {
    let addBlue = Number(event.target.dataset.blue);
    b += addBlue;
    dvMain.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    dvCalculations.innerHTML = dvMain.style.getPropertyValue('background-color');
}
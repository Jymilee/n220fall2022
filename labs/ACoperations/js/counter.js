/*  Jymilee Wyndle
    N220 Section 24603
    September 8, 2022 */

//Set variable
let counter = 0;  //Name variable counter, set to 0

//Create setup function
function setup() { //Open setup function
    createCanvas(800, 600); //Create canvas size to be 800,600 pixels
    background(249, 220, 250); //fill background color to light pink
    console.log(0);
}

//Create draw function
function draw() { //Open draw function
    counter = counter + 1; //Set the speed of the counter to be 1
    console.log(counter); //Set console to show code running
}
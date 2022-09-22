/*  Jymilee Wyndle 
    N220 Section 24603
    September 8, 2022 */


//create global variables
var radius = 100; //set radius amount for circle 
var x = -radius; //set x to be starting point before canvas's width
var speed = 5; //set speed to be 5 pixels

//Create the canvas and set background
function setup() { //Open setup function
    createCanvas(800, 600); //create canvas size to be 800, 600 pixels
}

//begin draw function to include background color, speed, wrap around, and circle
function draw() {
    background(249, 220, 250); //fill background color to light pink & reset background each time code is run
    x += speed; //set speed to x + 5 pixels
    if (x > width+radius) { //create if statement for circle to wrap around after it reaches the end of the canvas
        x = -radius; //set wrap around point to be before the canvas width
    }
   ellipse (x, 300, radius); //create circle with variable x at starting point before canvas width
}
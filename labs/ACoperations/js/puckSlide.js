/*  Jymilee Wyndle 
    N220 Section 24603
    September 8, 2022 */


//Create the canvas and set background
function setup() { //Open setup function
    createCanvas(400, 300); //create canvas size to be 400, 300 pixels
    background(249, 220, 250); //fill background color to light pink
}

//Begin drawing 
function draw() { //Open draw function
    background(249, 220, 250); //Put background fill first to eliminate previous shape when code continuously runs

//Create if functions for circle colors
    if ( mouseX > 200 ) { //Create boolean if function--if the mouse is greater than 200 pixels on the x coordinate, run code
        fill(177, 83, 71); //if true, or the mouse is greater than 200 pixels on the x coordinate, then fill the circle red
    } 
    if ( mouseX < 200 ) //Create boolean if function--if the mouse is less than 200 pixels on the x coordinate, run code
        fill (72, 136, 203); //if true, or the mouse is less than 200 pixels on the x coordinate, then fill the circle blue
        
    ellipse(mouseX, mouseY, 30); //Create circle using mouse x and y coordinates so it follows the mouse, and set radius to 30

}
/*Jymilee Wyndle
  Travis Faas
  N220 Section 24603
  September 22, 2022*/

//create object variables
let world = { 
    r: 100, //set radius to 100
    x: -100, //set x to start before the radius
    y: 300, //set y to be at 300
    speed: 5 //set speed of ball to be 5
}

//Create the canvas and set background
function setup() { //Open setup function
    createCanvas(800, 600); //create canvas size to be 800, 600 pixels

}

//begin draw function to include background color, speed, wrap around, and circle
function draw() {
    background(249, 220, 250); //fill background color to light pink & reset background each time code is run
   
    world.x += world.speed; //set speed to x + 5 pixels

    if (world.x > width+world.r) { //create if statement for circle to wrap around after it reaches the end of the canvas
        world.x = -world.r; //set wrap around point to be before the canvas width
    }
   ellipse (world.x, world.y, world.r); //create circle with variable x at starting point before canvas width
}

/*Jymilee Wyndle
  Travis Faas
  N220 Section 24603
  September 15, 2022 */

//Begin setup function
function setup() { //create function setup
    createCanvas(800,600); //set canvas size to 800px by 600px
    background (226, 224, 236); //set background to pink
}

//begin draw function
function draw() { //create function draw
   removeRed(); //invoke removeRed function
}

//Create function to remove red from circle
function removeRed (r, b, g) { //begin removeRed function
    let noRed = color(170, 200, 150); //set variable noRed to equal a shade of green with red
    noRed.setRed(0); //set variable noRed to set the red amount to zero
    fill(noRed); //fill circle with variable noRed, removing the red from the shade of green
    circle(400, 300, 50, 50); //draw circle to be at 400x by 300y with a radius of 50px
}

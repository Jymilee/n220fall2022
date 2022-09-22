/*Jymilee Wyndle
  Travis Faas
  N220 Section 24603
  September 22, 2022*/

//Create array for tall objects 1 and 2
let tall = [
    { //create 1st object [0]
    x: 2, //set x to be at 2
    y: 170, //set y to be at 170
    w: 20, //set width to be 20
    h: 80, //set height to be 80
},
{ //create 2nd object [1]
    x: 378, //set x to be at 378
    y: 170, //set y to be at 170
    w: 20, //set width to be 20
    h: 80, //set height to be 80
}
]; 

//create setup function
function setup() { 
    createCanvas(400, 400); //create canvas size to be 400px by 400px
}

//create draw function
function draw() {
    background(244, 218, 188); //set background to be orange
    drawRect(tall[0]); //invoke drawRect function with 1st object [0]
    drawRect(tall[1]); //invoke drawRect function with 2nd object [1]

    if(keyIsDown(UP_ARROW)) { //create if statement for when up arrow is pressed
        tall[0].y += 5; //set 1st object to move up
        tall[1].y -= 5; //set 2nd object to move down
    } else if (keyIsDown(DOWN_ARROW)) { //else statement for when down arrow is pressed
        tall[0].y -= 5; //set 1st object to move down
        tall[1].y += 5; //set 2nd object to move up
    }
}
//create drawRect function to draw rectangles
function drawRect(tall) { //set to take one argument
    fill(231, 187, 215); //set color to be pink
    rect(tall.x, tall.y, tall.w, tall.h); //create rectangle using object variables
} 


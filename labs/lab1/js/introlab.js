/* 
  Jymilee Wyndle
    August 31, 2022
    N220 Section 24603
    Personal Composition
*/


function setup() {
    createCanvas(600, 600); //set canvas size
}

function draw() {
                          
    //set color variables
    var purple = "#E0CEF9"; //color variable set for background
    var yellow = "#F9F7CE"; //color variable set for petals
    var green = "#D7F9CE"; //color variable set for stem and leaf
    
    //set background
    background(purple); //fill background

    //begin drawing of flower, stem, and leaf
    noStroke(); //remove outlines

    fill (yellow);  //fill petals
    ellipse (200, 200, 50, 50); //create first circle petal, left
    ellipse (225, 225, 50, 50); //create second circle petal, top
    ellipse (200, 250, 50, 50); //create third circle petal, right
    ellipse (175, 225, 50, 50); //create fourth circle petal, bottom
    fill ("black"); //fill center color of flower 
    ellipse (200, 225, 30, 30); //create center circle of flower

    fill (green); //fill stem and leaf
    rect (195, 275, 10, 150); //create stem of flower with rectangle
    arc (215, 405, 40, 40, 0, PI+HALF_PI); //create leaf with 3/4 pie


}
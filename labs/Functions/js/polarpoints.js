/*Jymilee Wyndle 
  Travis Faas
  N220 Section 24603 
  September 15, 2022 */

//Begin setup function
function setup() { //Create setup function
    createCanvas(800, 600); //set canvas size to be 800px by 600px
}

//Begin draw function
function draw() { //Create draw function
    translate(100, 100); //move starting point of circle to be at 100x and 100y
    var res = polarPoint(60); //set variable to return of function polarPoint, set r value to 60

    ellipse(res.x, res.y, 10); //create circle at return of object resx and object resy with a 10px radius
}

//Begin polarPoint function
function polarPoint(r) { //create polarPoint function
    var x = r * Math.sin(mouseX); //set variable x to equal parameter r time the sin of point of mouse x value
    var y = r * Math.cos(mouseX); //set variable y to equal parameter r times the cosine of point of mouse x value

    return createVector(x, y); //return the value of function and create a vector with parameters of coordinates

}
//Create global variable grouping for wings of the butterfly
let wings = { //set wings to be variable name
    xr: 200, //set right wings x coordinate
    xl: 150, //set left wings x coordinate
    yt: 105, //set top wings y coordinate
    yb: 150, //set bottom wings y coordinate
    d: 50 //set diameter of wings 
}; 

//create canvas and background
function setup() { //begin setup function
    createCanvas(800, 600); //set canvas size to 800px by 600px
    background("pink"); //set canvas background color to pink
}

//Add in butterfly drawings
function draw() { //begin draw function
    butterfly (10, 10); //invoke butterfly function to coordinates (10,10)
    butterfly (150, 200); //invoke butterfly function to coordinates (150,200)
    butterfly (300, -100); //invoke butterfly function to coordinates (300,-150)
}

//create butterfly function drawing
function butterfly (x,y) { //begin butterfly function setting arguments to (x,y)
    translate(x,y); //add translate to move butterfly coordinates around canvas
    fill("purple"); //fill wings with purple
    circle(wings.xr, wings.yt, wings.d); //create top right wing using variables
    circle(wings.xr, wings.yb, wings.d); //create bottom right wing using variables
    circle(wings.xl, wings.yt, wings.d); //create top left wing using variables
    circle(wings.xl, wings.yb, wings.d); //create bottom left wing using variables

    fill ("black"); //fill body and antennas black
    rect(165, 85, 20, 80, 50); //create body of butterfly
    line(170, 85, 150, 65); //create left antenna
    line(180, 85, 198, 65); //create right antenna
}
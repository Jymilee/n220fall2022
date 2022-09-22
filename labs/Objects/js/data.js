/*Jymilee Wyndle
  Travis Faas
  N220 Section 24603
  September 22, 2022*/

//create object variables for cactus
let cactus = {
    potx: 100, //set pot x to 100
    poty: 200, //set pot y to 200
    potw: 70, //set pot width to 70
    poth: 50, //set pot height to 50

    stemx: 110, //set stem x to 110
    stemy: 100, //set stem y to 100
    stemw: 50, //set stem width to 50
    stemh: 120, //set stem height to 120
    stemr: 60, //set stem roundness to 60

    armx: 170, //set arm x to 170
    army: 110, //set arm y to 110
    armw: 20, //set arm width to 20
    armh: 50, //set arm height to 50

    elbx: 153, //set arm elbow x to 153
    elby: 135, //set arm elbow y to 135
    elbw: 35, //set arm elbow width to 35
    elbh: 25, //set arm elbow height to 25

    potColor: "#E8B897", //set pot color to terracotta
    cColor: "#C5F6C7" //set cactus color to green
}; 

//create setup function
function setup() {
    createCanvas(400, 400); //create canvas size to be 400px by 400px
    background(181, 219, 250); //set background to blue
}

//create draw function
function draw() {
    drawCactus(cactus); //invoke drawCactus function set at cactus object
}

//create drawCactus function
function drawCactus(cactus) { //set to one argument with cactus object variables
    noStroke(); //remove lines from shapes
    fill(cactus.cColor); //set color for cactus shapes to green
    rect(cactus.stemx, cactus.stemy, cactus.stemw, cactus.stemh, cactus.stemr); //create first rectangle for stem
    rect(cactus.elbx, cactus.elby, cactus.elbw, cactus.elbh, cactus.stemr); //create right elbow for right arm
    rect(cactus.armx, cactus.army, cactus.armw, cactus.armh, cactus.stemr); //create right arm 
    rect(cactus.armx - 88, cactus.army + 20, cactus.armw, cactus.armh - 10, cactus.stemr); //create left arm
    rect(cactus.elbx - 70, cactus.elby + 15, cactus.elbw, cactus.elbh, cactus.stemr); //create left elbow
    fill(cactus.potColor); //set color for pot shape to terracotta
    rect(cactus.potx, cactus.poty, cactus.potw, cactus.poth); //create pot 
} 
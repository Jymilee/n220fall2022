/* Jymilee Wyndle 
Travis Faas 
N220 Section 24603
October 12, 2022 */

//create all variables attached to divs


let result = document.getElementById("result"); //results
let rox = document.getElementById("rock"); //rock button
let paper = document.getElementById("paper"); //paper button
let scissors = document.getElementById("scissors"); //scissors button
let guard = document.getElementById("guard"); //guard button
let myResult = document.getElementById("my"); //my results box
let theirResult = document.getElementById("their"); //computers results box
let myScore = document.getElementById("mine"); //my score box
let theirScore = document.getElementById("computer"); //computers score box

//create arrays for buttons and boxes
let b = [rox, paper, scissors, guard]; //buttons
let boxes = [myResult, theirResult, myScore, theirScore]; //boxes




//create for loop with boxes styling
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "#FFFFFF";
    boxes[i].style.margin = "30px";
    boxes[i].style.width = "70px";
    boxes[i].style.height = "30px";
    boxes[i].style.textAlign = "center";
    boxes[i].style.fontWeight = "bold";
    boxes[0].style.color = "#C70085";
    boxes[1].style.color = "#00B0A2";
}

//create for loop for buttons styling
for (let i = 0; i < b.length; i++) {
    b[i].style.backgroundColor = "#D3CBF8";
    b[i].style.margin = "30px"; 
    b[i].style.width = "60px";
    b[i].style.height = "20px";
    b[i].style.textAlign = "center";
    b[0].innerHTML = "Rock";
    b[1].innerHTML = "Paper";
    b[2].innerHTML = "Scissors";
    b[3].innerHTML = "Guard";
}

//create function for onclick to display random for computer and my choice
function random() {

    //while loop to create random choice for computer
    let draw = [];
    while (draw < b.length) {
        draw = b[Math.floor(Math.random()*4)];
        if (draw === b[0]) {
            boxes[1].innerHTML = "Computer's Result: " + b[0].innerHTML; 
        } else if (draw === b[1]) {
            boxes[1].innerHTML = "Computer's Result: " + b[1].innerHTML;
        } else if (draw === b[2]) {
            boxes[1].innerHTML = "Computer's Result: " + b[2].innerHTML;
        } else if (draw === b[3]) {
            boxes[1].innerHTML = "Computer's Result: " + b[3].innerHTML;
        }
    }
    

}

    //Cannot for the life of me figure out how to display my choice 


/* for (let i = 0; i < b.length; i++) {
        
    if (i === 0) {
        boxes[0].innerHTML = "Your Result: " + b[0].innerHTML;
        
    } else if (i === 1) {
        boxes[0].innerHTML = "Your Result: " + b[1].innerHTML;
        
    } else if (i === 2) {
        boxes[0].innerHTML = "Your Result: " + b[2].innerHTML;
        
    } else if (i === 3) {
        boxes[0].innerHTML = "Your Result: " + b[3].innerHTML;
        
    }
} */






 /* for (let i = 0; i < b.length; i++) {

        if (i === b[0]) {
             boxes[0].innerHTML = "Your Score: " + b[0].innerHTML;
        }
    } */





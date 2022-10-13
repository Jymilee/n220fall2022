/* Jymilee Wyndle 
Travis Faas 
N220 Section 24603
October 12, 2022 */


//create 6 variables to select ids from 6 divs
let topDiv = document.getElementById("top"); //top box
let box1 = document.getElementById("box1"); //boxes 1-6 
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");


//create array for all boxes besides top box
let boxes = [box1, box2, box3, box4, box5, box6];


//style top box
topDiv.style.backgroundColor = "#D7F8CB";
topDiv.style.width = "100px";
topDiv.style.height = "100px";
topDiv.style.margin = "20px";
topDiv.style.textAlign = "center";

//create for loop to style other boxes
for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "#F8CBD5";
    boxes[i].style.width = "100px";
    boxes[i].style.height = "100px";
    boxes[i].style.margin = "20px";
    boxes[i].style.textAlign = "center";
    boxes[0].innerHTML = "hello";
    boxes[1].innerHTML = "hi";
    boxes[2].innerHTML = "good morning";
    boxes[3].innerHTML = "hey there";
    boxes[4].innerHTML = "goodbye";
    boxes[5].innerHTML = "bye";
}

//create function for onclick for boxes 1 - 6

//function includes for loop to style box 1 with original style and then if it's clicked then it will change color, bold, and display to top box
function highlight1() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#F8CBD5";
        boxes[i].style.fontWeight = "normal"; 

        if (i === 0) {
            boxes[0].style.backgroundColor = "#CBE8F8";
            boxes[0].style.fontWeight = "bold";
            topDiv.innerHTML = boxes[0].innerHTML; 
        }
    }
}

function highlight2() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#F8CBD5";
        boxes[i].style.fontWeight = "normal"; 

        if (i === 1) {
            boxes[1].style.backgroundColor = "#CBE8F8";
            boxes[1].style.fontWeight = "bold"; 
            topDiv.innerHTML = boxes[1].innerHTML; 
        }
    }
}

function highlight3() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#F8CBD5";
        boxes[i].style.fontWeight = "normal"; 

        if (i === 2) {
            boxes[2].style.backgroundColor = "#CBE8F8";
            boxes[2].style.fontWeight = "bold";
            topDiv.innerHTML = boxes[2].innerHTML;  
        } 
    }
}

function highlight4() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#F8CBD5";
        boxes[i].style.fontWeight = "normal"; 

        if (i === 3) {
            boxes[3].style.backgroundColor = "#CBE8F8";
            boxes[3].style.fontWeight = "bold";
            topDiv.innerHTML = boxes[3].innerHTML;  
        }
    }
}

function highlight5() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#F8CBD5";
        boxes[i].style.fontWeight = "normal"; 

        if (i === 4) {
            boxes[4].style.backgroundColor = "#CBE8F8";
            boxes[4].style.fontWeight = "bold"; 
            topDiv.innerHTML = boxes[4].innerHTML; 
        }
    }
}

function highlight6() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#F8CBD5";
        boxes[i].style.fontWeight = "normal"; 

        if (i === 5) {
            boxes[5].style.backgroundColor = "#CBE8F8";
            boxes[5].style.fontWeight = "bold"; 
            topDiv.innerHTML = boxes[5].innerHTML; 
        }
    }
} 

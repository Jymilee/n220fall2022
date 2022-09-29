/* Jymilee Wyndle
Travis Faas 
N220 Section 24603
September 29, 2022 */

let dvBox = document.getElementById("box"); //create variable for id 

//create object variable for box
let box = { 
    purple: "#DEC8F1", //set purple to color 
    w: 300, //set width to be 300px
    h: 300 //set height to be 300px
}


dvBox.style.backgroundColor = box.purple; //set color of box to variable purple
dvBox.style.width = box.w + "px"; //set width of box to variable width
dvBox.style.height = box.h + "px"; //set height of box to variable height
dvBox.innerHTML = "click me"; //set text to be click me
dvBox.style.textAlign = "center"; //align text to center
document.body.appendChild(dvBox); //select child 

//create function for mouse click
function change() {
    dvBox.style.backgroundColor = "#FA98AE"; //change background color to pink when clicked
    dvBox.innerHTML = "get off me"; //change text to get off me when clicked
}

//create function for mouse out
function getOff () {
    dvBox.style.backgroundColor = box.purple; //change color back to purple when mouse out
    dvBox.innerHTML = "thank you"; //change text to thank you when mouse out
}
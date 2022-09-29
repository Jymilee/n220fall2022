/* Jymilee Wyndle
Travis Faas 
N220 Section 24603
September 29, 2022 */

let dvBox = document.getElementById("bigbox"); //create variable for id

//create object variable for box
let box = {
    w: 100, //set width to be 100px
    h: 100 //set height to be 100px
}

dvBox.style.backgroundColor = "#C4D996"; //set background color of box to be green
dvBox.style.width = box.w + "px"; //set width using variable width with px
dvBox.style.height = box.h + "px"; //set height using variable height with px
document.body.appendChild(div); //select child

//create function for mouse click
function grow() {
    dvBox.style.width = (box.w *= 1.1) +"px"; //make the width grow 10% when clicked
    dvBox.style.height = (box.h *= 1.1) + "px"; //make the height grow 10% when clicked
    
}
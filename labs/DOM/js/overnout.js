/* Jymilee Wyndle
Travis Faas 
N220 Section 24603
September 29, 2022 */

let dvColors = document.getElementById("colors"); //create variable for id


dvColors.style.backgroundColor = "#96C1D9"; //set background color of box to blue
dvColors.style.width = "100px"; //set width to be 100px
dvColors.style.height = "100px"; //set height to be 100px
document.body.appendChild(dvColors); //select child

//create function for mouse out
function changeBack() {
    dvColors.style.backgroundColor = "#96C1D9"; //set color back to blue
}

//create function for mouse over
function colorChange() {
    dvColors.style.backgroundColor = "#000000"; //set color to black
}

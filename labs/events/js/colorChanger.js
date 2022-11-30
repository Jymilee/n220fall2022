/* Jymilee Wyndle
   N220 Section 24603
   Travis Faas
   November 26, 2022 */

//reference id's from html
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");


//create styling for each div
box1.style.width = "200px";
box1.style.height = "200px";
box1.style.margin = "5px";
box1.style.backgroundColor = "#C1C2C3";

box2.style.width = "200px";
box2.style.height = "200px";
box2.style.margin = "5px";
box2.style.backgroundColor = "#C1C2C3";

box3.style.width = "200px";
box3.style.height = "200px";
box3.style.margin = "5px";
box3.style.backgroundColor = "#C1C2C3";


//add event listener onclick & function to each div
box1.addEventListener("click", changeColor);
box2.addEventListener("click", changeColor);
box3.addEventListener("click", changeColor);


//create function referencing the data-color from each div
function changeColor(event) {
    let color = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color;

}
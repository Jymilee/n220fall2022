/* Jymilee Wyndle 
N220 Section 24603 
Travis Faas 
November 10, 2022 */

//reference ids from html - div & button
let dvDisplay = document.getElementById("dvDisplay");
let btnDisplay = document.getElementById("btnDisplay");


//create array of objects
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];


//create function to display objects to div
function displayDivs() {

    //create for loop to run through each object in the array
    for (let i = 0; i < objects.length; i++) { 
        
        //create new element
        let dvNew = document.createElement("div");
        
        //set each category of object to style to new element - background color, height, & width
        dvNew.style.backgroundColor = objects[i].color;
        dvNew.style.height = objects[i].height.toString() + "px";
        dvNew.style.width = objects[i].width.toString() + "px";
        
        //display each item of each object after the other
        dvDisplay.appendChild(dvNew);
    }
}

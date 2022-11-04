/* Jymilee Wyndle 
N220 Section 24603 
Travis Faas 
November 3, 2022 */


//reference id's from html
let box = document.getElementById("box").value;
let check = document.getElementById("check");
let display = document.getElementById("display");
let idk = "";

//create function that takes a string
function checkCharacter(val) {

    for(i = 0; i < val.length; i++) { //for loop to run through all characters of string
        if(val.includes("#")) { //create an if statement to remove #
         idk = val.replace("#", ""); //replace # with empty string
        }
    }  

   
}

//create functionto invoke previous function and display value to div
function remove() {
    let box = document.getElementById("box").value; //create variable to hold value of input
    checkCharacter(box); //invoke function with value of input

    display.innerHTML = idk; //display value to div

}


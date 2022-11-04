/* Jymilee Wyndle 
N220 Section 24603 
Travis Faas 
November 3, 2022 */


//reference id's from html
let enter = document.getElementById("enter");
let calc = document.getElementById("calc");
let display = document.getElementById("display");

//create onclick function
function check() {
    let num = enter.value; //create variable to hold value of input

    divide(num); //invoke function to check the value
}


//create function to check if input is divisible by 7
function divide(val) {

    if((val % 7) == 0)  { //create an if statement to check if value is divisible by 7
        display.innerHTML = "true"; //if it is, then it displays true
    } else {
        display.innerHTML = "false"; //if not, it displays false
    }

}

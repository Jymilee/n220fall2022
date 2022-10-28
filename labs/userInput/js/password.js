/* Jymilee Wyndle 
Travis Faas 
N220 Section 24603 
October 27, 2022 */

//reference id's from html
let box = document.getElementById("box");
let one = document.getElementById("one");
let two = document.getElementById("two");
let btn = document.getElementById("btn");

//create onclick anonymous function
btn.addEventListener("click", function() {
    let user = one.value; //create variable to hold value of the username input
    let pass = two.value; //create variable to hold value of the password input

    //create if statement to check the username and password value against the strings - if true write succes to div and false write wrong info to div
    if ((user == 'Username') && (pass == 'Password')) {
        box.innerHTML = "Success";
    } else {
        box.innerHTML = "Wrong information";
    }
})
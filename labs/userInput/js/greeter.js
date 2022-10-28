/* Jymilee Wyndle 
Travis Faas 
N220 Section 24603 
October 27, 2022 */

//reference id's from html
let txtName = document.getElementById("txtName");
let btn = document.getElementById("btn");


//create onclick anonymous function
btn.addEventListener("click", function() {
    let usrname = txtName.value; //create variable to hold the input value
    console.log('Hello ' + usrname); //output phrase + input value to console
})
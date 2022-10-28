/* Jymilee Wyndle 
Travis Faas 
N220 Section 24603 
October 27, 2022 */

//reference id's from html
let total = document.getElementById("total");
let calc = document.getElementById("calc");


//create onclick anonymous function to calculate tip value and add the tip to the input value
calc.addEventListener("click", function() {
    let num = Number(total.value); //create variable to hold the number value of the input
    let tip = num*.07; //create variable to hold the value times the tip percentage of .07
    let ttl = num + tip; //create variable to hold the tip value plus the original total value
    console.log("Tip: $" + tip); //log the string plus tip to console
    console.log("Total: $" + ttl); //log the string plus tip + total to console
})
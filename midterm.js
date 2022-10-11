/* /*Write an application that has a div with the number 10 in it when the div is clicked. 
Subtract one from the number and display the lower number in the div 
If the number is less than 1, display the word "liftoff" in the div*/

/* let myDiv = document.getElementById("myDiv");
let count = 10; //global variable - might need to be modified multiple times

function doThing() {
    //console.log("hi") use console log to make sure that this works
    
    //count = count - 1; //have to take variable and assign it back to keep subtracting
    count -= 1;
    myDiv.innerHTML = count;

    //myDiv.innerHTML = count - 1;  this does calculation but doesn't assign to variable

    if(count < 1) {
        myDiv.innerHTML = "lift off";
    }

} */ 




/* Using an array with the value 1, 20, 2, 30, 3, 40, 4, 90
write out the values in the array to the doc
if the nubmer is less than 10, add an "a" in front of the number
use a for loop to write these values out
 */

let myDiv = document.getElementById("myDiv");
let myData = [1, 20, 2, 30, 3, 40, 4, 90]; //1. make array with numbers
//console.log(myData); --check to see if this is good, anything not an error is good to go

myDiv.innerHTML = myData; //2. write out the numbers in the array to the doc

for(let i = 0; i < myData.length; i++) { //need to output each number individually
    //console.log(i); check to see how many times the loop is running, to see if code is working or not, check each line of code so you know exactly where it comes from
    //console.log(myData[i]); now you can see values
   if(myData[i] < 10) { 
    myDiv.innerHTMl += "a";
   }
    myDiv.innerHTML += myData[i] + "<br />"; 
}

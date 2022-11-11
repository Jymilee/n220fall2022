/* Jymilee Wyndle 
N220 Section 24603 
Travis Faas 
November 10, 2022 */

//reference elements from html - input, button & divs
let txtEnterNumbers = document.getElementById("txtEnterNumbers");
let btnEnter = document.getElementById("btnEnter");
let dvDisplaySum = document.getElementById("dvDisplaySum");
let dvDisplayAverage = document.getElementById("dvDisplayAverage");



//Make onclick function
function sumAndAverage() {

    
    let numbers = String(txtEnterNumbers.value); //create variable to hold the converted input value as a string
    let splitNumbers = numbers.split(","); //create variable to hold the split the values entered by commas
    
    let sumOfNumbers = 0; //create variable to start the sum at 0, outside of the for loop

    for (let i = 0; i < splitNumbers.length; i++) { //create for loop to loop through the splitNumbers array of values
        let irlNumbers = Number(splitNumbers[i]); //create value to hold the converted split input values in numbers
        
        sumOfNumbers += irlNumbers; //use the sumOfNumbers value of 0 to add to each array number value every loop
    }

    dvDisplaySum.innerHTML = "Sum: " + sumOfNumbers; //display the new sum value of the inputted numbers

    let average = sumOfNumbers /= splitNumbers.length; //create a variable to hold the average--the sum divided by the length of the splitNumbers array
    
    dvDisplayAverage.innerHTML = "Average: " + average; //display the average value 

    txtEnterNumbers.value = ''; //remove the value from the input box
}
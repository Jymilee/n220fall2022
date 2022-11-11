/* Jymilee Wyndle 
N220 Section 24603 
Travis Faas 
November 10, 2022 */

//create variable referencing elements from html - input, button & divs
let txtEnterWords = document.getElementById("txtEnterWords");
let btnEnter = document.getElementById("btnEnter");
let dvBadWordsFound = document.getElementById("dvBadWordsFound");
let dvSumOfBadWords = document.getElementById("dvSumOfBadWords");


//create onclick function
function badWords () {

    let words = String(txtEnterWords.value); //create variable to hold the input value as a string
    let splitWords = words.split(" "); //create variable to hold the input values split by spaces into an array

    //create 3 variables to hold each bad word
    let findBadWord1 = 'clear';
    let findBadWord2 = 'water';
    let findBadWord3 = 'tires';

    let sum = 0; //create a variable to hold the value of 0 to find sum of bad words entered
    
    for (let i = 0; i < splitWords.length; i++) { //create for loop to run through each value of the entered array
        
        if (splitWords[i] == findBadWord1 || splitWords[i] == findBadWord2 || splitWords[i] == findBadWord3) { //create an if statement to check for each of the bad words with "or"
            dvBadWordsFound.innerHTML = "Bad word found!"; //if one of the words is entered, then display "bad word is found"
            
            sum += 1; //add 1 to 0 each time a bad word is entered to create tally
            dvSumOfBadWords.innerHTML = "Total found: " + sum; //display tally to div
        }
    }

    txtEnterWords.value = ''; //remove input values after clicking the button
}
/*  Jymilee Wyndle 
    N220 Section 24630
    Travis Faas
    December 10, 2022 */


//reference ids from document for the "alert" div, that will tell you if you got a match or not & the container div for the cards
let dvAlert = document.getElementById("dvAlert");
let dvCardDisplay = document.getElementById("dvCardDisplay");

//create variables to hold empty arrays - card choice, card info, amount of wins - to push data into them
let choice = [];
let choiceInfo = [];

//create an array to hold two sets names & images for each card, "pre-shuffled" or already mixed
let cards = [
    {   name: 'peach',
        img: '../images/peach.jpg'},

    {   name: 'apple',
        img: '../images/apple.jpg'},

    {   name: 'apple',
        img: '../images/apple.jpg'},

    {   name: 'lemon',
        img: '../images/lemon.jpg'},

    {   name: 'banana',
        img: '../images/banana.jpg'},

    {   name: 'carrot',
        img: '../images/carrot.jpg'},

    {   name: 'coconut',
        img: '../images/coconut.jpg'},

    {   name: 'strawberry',
        img: '../images/strawberry.jpg'},
    
    {   name: 'lemon',
        img: '../images/lemon.jpg'},

    {   name: 'banana',
        img: '../images/banana.jpg'},

    {   name: 'watermelon',
        img: '../images/watermelon.jpg'},

    {   name: 'coconut',
        img: '../images/coconut.jpg'},

    {   name: 'strawberry',
        img: '../images/strawberry.jpg'},

    {   name: 'carrot',
        img: '../images/carrot.jpg'},

    {   name: 'watermelon',
        img: '../images/watermelon.jpg'},

    {   name: 'peach',
        img: '../images/peach.jpg'}
];   


//create function with for loop to display the 16 cards to screen
function displayCards() {
    for(let i = 0; i < cards.length; i++) {
        //create a variable to hold new image elements
        let card = document.createElement('img');
        //set the attribute for each image element to source the path of the card face image
        card.setAttribute('src', '../images/cardFace.jpg');
        //set the attribute for each card to hold a dataset set to the index number from the array
        card.setAttribute('data-number', i);
        //add an onclick event listener for each element linking to the chooseCard function
        card.addEventListener('click', chooseCard);

        //add in margin to space out cards
        card.style.margin = "5px";
        //add them into the div that will display the cards by appending with 'card' set at the argument (cardFace image)
        dvCardDisplay.appendChild(card);
    }
}


//create a function that will occur when a card is clicked
function chooseCard(event) {
    //create a variable that will hold the attribute of the data-number via array index number from the chosen card
    let cardSubject = event.target.getAttribute('data-number');
    //push the chosen card's name into the empty array choice
    choice.push(cards[cardSubject].name);
    //push the chosen card's data-number via array index number into the empty array
    choiceInfo.push(cardSubject);
    //set the attribute of the clicked card to show the image of the card at data-number of the chosen card
    event.target.setAttribute('src', cards[cardSubject].img);

    //if statement to limit to 2 choices of cards at a time via the choice array that has been pushed two cards' info 
    if(choice.length === 2) {
        //setTimeout to add a match function if true and set the time the cards are shown to 2 seconds
        setTimeout(match, 2000);
    } 
}


//function if two cards are chosen 
function match() {
    //set variable to hold all of the image elements
    let cardImg = document.querySelectorAll('img');
    //set variable to hold the dataset number from the first choice of card from the chooseCard function
    let choice1 = choiceInfo[0];
    //set variable to hold the dataset number from the second choice of card from the chooseCard function
    let choice2 = choiceInfo[1];

    //if statement for if there is a match or there isn't a match
    if(choice[0] === choice[1]) {
        //if card 1 dataset info matches card 2 dataset info, then setTimeout to apply the aMatch function
        setTimeout(aMatch, 0);
        //set both cards to the "vanish" image, (white, as if it's vanishing) - setAttribute of variable cardImage to white image
        cardImg[choice1].setAttribute('src', '../images/vanish.jpg');
        cardImg[choice2].setAttribute('src', '../images/vanish.jpg');
    } else {
        //if card 1 doesn't match card 2, then setTimeout to apply noMatch function
        setTimeout(noMatch, 0);
        //set both cards to the original cardFace image via setAttribute of variable cardImage to cardFace.jpg
        cardImg[choice1].setAttribute('src', '../images/cardFace.jpg');
        cardImg[choice2].setAttribute('src', '../images/cardFace.jpg');
    }

    //reset arrays back to empty so they can be reused after they've been matched or need to try again
    choice = [];
    choiceInfo = [];
}


//create function for a match of 2 cards
function aMatch() {
    //alert the div that user has found a match
    dvAlert.innerHTML = "You found a match!";
    //setTimeout to hide this message after 1.5 seconds
    setTimeout(function() {
        dvAlert.innerHTML = "";
    }, 1500);
}


//create function for not matching 2 cards
function noMatch() {
    //alert the div that user did not get a match, but to keep trying
    dvAlert.innerHTML = "Not a match. Keep trying!";
    //setTimeout to hide this message after 1.5 seconds
    setTimeout(function() {
        dvAlert.innerHTML = "";
    }, 1500);
}


//reference button id from document
let btnRestart = document.getElementById('btnRestart'); 
//add onclick event listener to button with restart() function
btnRestart.addEventListener('click', restart);


//make screen refresh when the button is clicked
function restart() {
    window.location.reload();
}

//invoke displayCards() function, displaying 16 card face image elements
displayCards();

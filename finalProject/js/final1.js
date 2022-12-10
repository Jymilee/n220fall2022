

//reference ids from html
let dvAlert = document.getElementById("dvAlert");
let dvScore = document.getElementById("dvScore");
let dvCardDisplay = document.getElementById("dvCardDisplay"); 


//create an array to hold card images

let cardImages = [
    {
        name: 'peach',
        img: '../images/peach.jpg'
    },
    {
        name: 'apple',
        img: '../images/apple.jpg'
    },
    {
        name: 'apple',
        img: '../images/apple.jpg'
    },
    {
        name: 'lemon',
        img: '../images/lemon.jpg'
    },
    {
        name: 'banana',
        img: '../images/banana.jpg'
    },
    {
        name: 'carrot',
        img: '../images/carrot.jpg'
    },
    {
        name: 'coconut',
        img: '../images/coconut.jpg'
    },
    {
        name: 'strawberry',
        img: '../images/strawberry.jpg'
    },
    {
        name: 'lemon',
        img: '../images/lemon.jpg'
    },
    {
        name: 'banana',
        img: '../images/banana.jpg'
    },
    {
        name: 'watermelon',
        img: '../images/watermelon.jpg'
    },
    {
        name: 'coconut',
        img: '../images/coconut.jpg'
    },
    {
        name: 'strawberry',
        img: '../images/strawberry.jpg'
    },
    {
        name: 'carrot',
        img: '../images/carrot.jpg'
    },
    {
        name: 'watermelon',
        img: '../images/watermelon.jpg'
    },
    {
        name: 'peach',
        img: '../images/peach.jpg'
    },
];



//Create a function that displays cards to div
function displayCards() {

    for(let i = 0; i < cardImages.length; i++) { //create for loop to display image cards through the cardImages object array
        
        let image = document.createElement('img'); //create variable to hold the new "image" tags
        image.setAttribute('src', '../images/cardFace.jpg'); //give the image tag an attribute of 'src' to find the path of the images
        image.setAttribute('data-number', [i]); //give each 'image' tag a data-set 'data-number' to provide a number to the image, based on the array number
        image.addEventListener('click', chosenCard);

        image.style.margin = "5px"; //space the cards out 5px on all sides
        dvCardDisplay.appendChild(image); //display the cards via appendChild with the image variable as the argument.. which are the image tags with the associated paths

    };
};



//Create a function for when a card is chosen 
function chosenCard() {
    

}

displayCards(); //invoke the displayCards function to display the loop of cards to the div
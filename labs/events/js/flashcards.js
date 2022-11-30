/* Jymilee Wyndle
   N220 Section 24603
   Travis Faas
   November 26, 2022 */

let dvAnswer = document.getElementById("dvAnswer");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


btn1.addEventListener("click", giveAnswer);
btn2.addEventListener("click", giveAnswer);
btn3.addEventListener("click", giveAnswer);


function giveAnswer(event) {
    let answer = event.target.getAttribute("data-answer");
    dvAnswer.innerHTML = answer;
}
/* Jymilee Wyndle 
Travis Faas 
N220 Section 24603
October 10, 2022  */

let myData = document.getElementById("myData"); //create variable for id
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]; //create array for numbers

myData.innerHTML = nums; //write out numbers

for (var i = 0; i < nums.length; i++) { //for loop for numbers
    //let item = nums[i];

    if (nums[i] / 3) { //idk how to do this
        myData.innerHTML = "beep";
        console.log(nums[i]);
    }
}

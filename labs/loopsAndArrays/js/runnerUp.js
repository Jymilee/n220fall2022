/* Jymilee Wyndle 
Travis Faas 
N220 Section 24603
October 10, 2022  */


runnerUp = document.getElementById("runnerUp"); //create variable for 1st div
third = document.getElementById("third"); //create variable for 2nd div
let times = [30, 70, 120]; //create array for times


for (let i = 0; i < times.length; i++) { //for loop to run all numbers
    
    if (times[i] > 1) { //if statement to select 3rd number
        runnerUp.innerHTML = times[2] + " Third Place"; //write 3rd number + third place text in first div
        
    }

    if (times[i] > 0) { //if statement to select 2nd number
        third.innerHTML = times[1] + " Second Place"; //write 2nd number + second place in second div
    }
}


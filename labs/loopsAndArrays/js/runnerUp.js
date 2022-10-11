runnerUp = document.getElementById("runnerUp");
third = document.getElementById("third");
let times = [30, 70, 120];


for (let i = 0; i < times.length; i++) {
    
    if (times[i] > 1) {
        runnerUp.innerHTML = times[2] + " Third Place";
        
    }

    if (times[i] > 0) {
        third.innerHTML = times[1] + " Second Place";
    }
}



function setup() {
    createCanvas(800,600);
    background (226, 224, 236);
}

function draw() {
   removeRed();
}

function removeRed (r, b, g) {
    let noRed = color(170, 200, 150);
    noRed.setRed(0);
    fill(noRed);
    circle(400, 300, 50, 50);
}

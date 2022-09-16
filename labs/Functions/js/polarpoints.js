
function setup() {
    createCanvas(800, 600);
}


function draw() {
    translate(100, 100);
    var res = polarPoint(60); 

    ellipse(res.x, res.y, 10);


}

function polarPoint(r) {
    var x = r * Math.sin(mouseX);
    var y = r * Math.cos(mouseX);

    return createVector(x, y);

}
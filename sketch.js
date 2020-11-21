var canvas, database;
var drawing = [];
var currentPath = [];

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    database = firebase.database();

    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
}

function startPath(){
    currentPath = [];
    drawing.push(currentPath);
}function endPath(){
    
}

function draw(){
    background(0);
    if (mouseIsPressed){
        var point = {
            x: mouseX,
            y: mouseY
        }
        currentPath.push(point)
    }
    beginShape();
    stroke(255);
    strokeWeight(4);
    noFill();
    for(var i = 0; i< drawing.length; i++){
        var path = drawing[i];
        beginShape();
        for(var p = 0; p< path.length; p++){
            vertex(path[p].x, path[p].y);
        }
        endShape();
    }
}
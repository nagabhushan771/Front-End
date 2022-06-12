var r = 255;
var g = 255;
var b = 255;
var dia = 30;

//setup func will be called when we run the code
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw(){
    circle(mouseX, mouseY, dia);//creates the circle
    noStroke();//removes the outline of the shapes on the screen
    fill(r, g, b, 100);//adds the color to the shapes in the screen
}

//this func will be called when the mouse is pressed
function mousePressed(){
    r = random(100, 255);//generates the random number between 100 and 255 both included
    g = random(100, 255);
    b = random(100, 255);
    dia = random(16, 64);
}
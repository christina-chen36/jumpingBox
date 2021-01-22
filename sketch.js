var canvas;
var music;
var box;
var blue, yellow, purple, green;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blue = createSprite(92.5,590,185,20)
    blue.shapeColor = "blue"
    yellow = createSprite(293,590,185,20)
    yellow.shapeColor = "orange"
    purple = createSprite(500.5,590,185,20)
    purple.shapeColor = "firebrick"
    green = createSprite(707.2,590,185,20)
    green.shapeColor = "green"

    //create box sprite and give velocity
    box = createSprite(Math.round(random(20,780)),20,20,20)
    box.shapeColor = "white"
    box.velocityX=2
    box.velocityY=2

    //create edgeSprite
    edges = createEdgeSprites()

}

function draw() {
    background(rgb(169,169,169));
    drawSprites()
    
    box.bounceOff(edges)
    
    
    
    
    //add condition to check if box touching surface and make it box color
    if (touchAndBounce(box, blue)){
        box.shapeColor = "blue"
        music.play()
    }
    if (touchAndBounce(box, yellow)){
        box.shapeColor = "orange"
        music.stop()
        box.velocityX=0
        box.velocityY=0
    }
    if (touchAndBounce(box, purple)){
        box.shapeColor = "firebrick"
    }
    if (touchAndBounce(box, green)){
        box.shapeColor = "green"
    }
}

function touchAndBounce(box1, box2)
{
    var isTouching = box1.isTouching(box2);
    if (isTouching) {
        box1.bounceOff(box2);
    }

    return isTouching;
}
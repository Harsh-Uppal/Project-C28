// JavaScript source code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//All Variables
var tree, ground, booy, mango, hasDragged, realRock;

function setup() {

    ground = [];
    realRock = [];

    createCanvas(1300, 600);

    engine = Engine.create();
    world = engine.world;

    //Give values to variables
    tree = new Tree(650, 100, 3);
    booy = new Boy (100, 175 , 10);
    ground[0] = new Ground(0, 250, 1000, 20);
    mango = new Mango(110, 190, 10);
    ground[1] = new Ground(1000, 0, 20, 250);
    realRock[0] = new Rock(700, 150, 20);
    realRock[1] = new Rock(750, 150, 20);
    realRock[2] = new Rock(670, 150, 20);
    realRock[3] = new Rock(700, 120, 20);
    realRock[4] = new Rock(730, 120, 20);
    realRock[5] = new Rock(730, 150, 20);

    hasDragged = false;
}

function draw() {
    background("white");
    Engine.update(engine);

    //display objects
    tree.display();
    ground[0].display();
    ground[1].display();
    booy.display();
    mango.display();
    for (var i = 0; i < realRock.length; i++)
    {
        realRock[i].display();
        realRock[i].checkForCollision(mango);
    }
}

function keyPressed() {
    //catch key presses
    if (keyCode == 32) {
        mango.body = null;
        mango = new Mango(110, 190, 10);
        hasDragged = false;
    }
}

function mouseDragged() {
    if (hasDragged)
        return;
    Matter.Body.setPosition(mango.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    mango.fly();
    hasDragged = true;
}
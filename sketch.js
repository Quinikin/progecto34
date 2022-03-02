const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box9, box10, box11
var box12, box13, box14
var box15, box16
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var box7, box6, box8
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(780,370,70,70);
    box2 = new Box(780,370,70,70);
    box3 = new Box(700,290,70,70);
    box4 = new Box(780,290,70,70);
    box5 = new Box(780,290,70,70);
    box6 = new Box(700,100,70,70);
    box7 = new Box(700,370,70,70);
    box8 = new Box(700,370,70,70);
    box9 = new Box(820,370,70,70);
    box10 = new Box(820,370,70,70);
    box11 = new Box(820,290,70,70);
    box12 = new Box(820,290,70,70);
    box13 = new Box(820,290,70,70);
    box14 = new Box(630,100,70,70);
    box15 = new Box(630,370,70,70);
    box16 = new Box(630,370,70,70);


    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
        background("white");
      
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();


    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function keyPressed(){

    if (keyCode === 32 ){
    slingshot.attach(bird.body)
    
    }
}

function mouseReleased(){
    slingshot.fly();
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

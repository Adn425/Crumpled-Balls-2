const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperBall;
var trashcan;
var ground;

function preload() {
  paperBallImg = loadImage("sprites/CP-2-master/paper.png");
  trashcanImg = loadImage("sprites/CP-2-master/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,700,800,20)

	paperBall = new Paper(100,680,30);
  
  trashcan = new Dustbin(500,680);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
  
  paperBall.display();
  ground.display();
  trashcan.display();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:128,y:-128})
  }
}
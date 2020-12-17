
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

let roof, rope;
let bob1, bob2, bob3, bob4, bob5;

let bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

bob1 = new Bob(600,500,100);
bob2 = new Bob(500,500,100);
bob3 = new Bob(400,500,100);
bob4 = new Bob(300,500,100);
bob5 = new Bob(200,500,100);


roof = new Roof(390,130, 540, 30);
//rope = new Rope();

rope1 = new Rope(bob1.body, roof.body);

	Engine.run(engine);
  
}


function draw() {
 
  background(160);
  rectMode(CENTER);
  drawSprites();
 

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display(); 
 //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();

}




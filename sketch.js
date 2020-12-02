
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Bob1, Bob2, Bob3, Bob4, Bob5, roof, rope1, rope2, rope3, rope4, rope5;
var Bobs= [];
var BobDiameter = Bobs.diameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob1 = new Bob(100, 100, 20);
	Bob2 = new Bob(140, 100, 20);
	Bob3 = new Bob(180, 100, 20);
	Bob4 = new Bob(220, 100, 20);
	Bob5 = new Bob(260, 100, 20);

	Bobs.push(Bob1);
	Bobs.push(Bob2);
	Bobs.push(Bob3);
	Bobs.push(Bob4);
	Bobs.push(Bob5);
	
	roof = new Roof(400, 700, 600, 20);

	rope1 = new Rope(Bob1.body, roof.body, -BobDiameter*2, 0);
	rope2 = new Rope(Bob2.body, roof.body, -BobDiameter*2, 0);
	rope3 = new Rope(Bob3.body, roof.body, -BobDiameter*2, 0);
	rope4 = new Rope(Bob4.body, roof.body, -BobDiameter*2, 0);
	rope5 = new Rope(Bob5.body, roof.body, -BobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

    Bob1.display();
	Bob2.display();
	Bob3.display();
	Bob4.display();
	Bob5.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){

		Matter.body.applyForce(Bobs.body, Bobs.body.position, {x:85, y:-85})
	}
}


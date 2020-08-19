const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var log1;
var ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,610,1200,10);
	log1 = new Log(600,555,100,100);
	paper = new Paper(80,100,25);

	log2 = new SideLog(546,555,15,100);
	log3 = new SideLog(650,555,15,100);
	log4 = new SideLog(600,610,100,5);

	Engine.run(engine);
  
}


function draw() {
 
  background("white");

  Engine.update(engine);
  ground.display();
  log1.display();
  paper.display();
	
  //log2.display();
  //log3.display();
  //log4.display();
 
  //keyPressed();
  //drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Body.applyForce(paper.body,paper.body.position,{x:300,y:-500})
	}

}
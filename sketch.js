
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var box1,box2,box3;





function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
	
  paper = new Paper(100,52);
  ground = new Ground(width/2,525,width,10,{isStatic : true});
  box1 = new Box(800,515,190,5);
  box2 = new Box(705,468,5,100);
  box3 = new Box(895,468,5,100);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  drawSprites();

  
  paper.display();
  ground.display();
  box1.display();
  box2.display();  
  box3.display();

	
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});
	
	}
}

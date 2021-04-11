
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;
var world;
var paper;


function setup() {
	createCanvas(1200, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,490,width,20);
	dustbinObj=new dustbin(1000,470);
	paper=new Paper(200,488);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  function keyPressed(){
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-135});
	  }
  }
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}


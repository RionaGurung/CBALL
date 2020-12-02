var ground0;

var dustbin1, dustbin2, dustbin3;

var paper0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {

	createCanvas(1260, 700);

	engine = Engine.create();
	world = engine.world;

	ground0 = new Ground(width/2, height-35, width,10);
	
	dustbin1 = new Dustbin(935,609,10,100);
	dustbin2 = new Dustbin(1065,609,10,100);
	dustbin3 = new Dustbin(1000, 654,140,10);  

	paper0 = new Paper(200,500,20,20);

	Engine.run(engine);
  
}


function draw() {

  background("black");
  
  ground0.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paper0.display();
  
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper0.body,paper0.body.position,{x:75,y:-75});

	}

}




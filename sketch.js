var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1,box2,box3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//ground.shapeColor=color("yellow");
	ground=new Ground(width/2,650,width,10)
	box1=new Box(720,600,20,100);
	 box2=new Box(830,640,200,20);
	 box3=new Box(920,600,20,100);
	 paper=new Paper(200,600,10);
	 
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
 
  box1.display();
  box2.display();
  box3.display();
  
  paper.display();
  ground.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:1.195,y:-1.195})

	}
}




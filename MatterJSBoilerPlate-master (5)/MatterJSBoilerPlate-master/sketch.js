var options={
	isStatic:false,
	restitution:0,
	friction:1,
	density:1.2
}
var options={
	isStatic:true,
	restitution:0,
	friction:1,
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);

  function keyPressed(){
	  if (keyCode ===32){
		  Matter.Body.setPosition(stoneObj.boady,{x:235,y:420})
		  launcherObject.attach(stoneObj.boady);
	  }
  }
  drawSprites();
 
}

function detectollision(Lstone,Lmango){
	mangoBoadyPosition=lmango.boady.setPosition
	stoneBoadyPosition=lstone.body.setPosition

	var distance =dist(stoneBoadyPosition.x,stoneBoadyPosition.y,mangoBoadyPosition.x,mangoBoadyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Boady.setStatic(lmang.body,false);
	}
}


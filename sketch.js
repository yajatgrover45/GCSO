var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var car,wall;
var speed,weight;
function preload()
{
	
}

function setup() {
	createCanvas(1600,400);
	speed = random(55,57);
	weight = random(400,1500);
	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
	car = createSprite(50,200,50,50);
	wall = createSprite(1000,200,60,height/2);
	car.shapeColor = "white";
	wall.shapeColor = "brown";
	car.velocityX = speed;
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  if(wall.x-car.x < (car.width+wall.width)/2)	{
	var deformation=0.5 * weight * speed* speed/22509;
	car.velocityX=0;
	if (deformation<100)	{
		car.shapeColor = "green";
	}
	if (deformation>100&&deformation<180){
		car.shapeColor = "yellow";
	}
	if (deformation>180)	{
		car.shapeColor = "red";
	}
  }
  
  drawSprites();
 
}




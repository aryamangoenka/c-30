const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
Matter.Bodies.polygon=Bodies.circle(50,200,50);
World.add(world,polygon);
  stand= new Ground(400,250,300,10)
  b1= new Box(330,235,30,40);
  b2= new Box(360,235,30,40);
  b3= new Box(390,235,30,40);
  b4= new Box(420,235,30,40);
  b5= new Box(450,235,30,40);
  b6= new Box(360,195,30,40);
  b7= new Box(390,195,30,40);
  b8= new Box(420,195,30,40);
  b9= new Box(390,155,30,40);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stand.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  
  drawSprites();
 
}

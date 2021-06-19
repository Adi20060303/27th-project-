
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var hammer;
var stone;
var rubber;
function setup() {
	var canvas = createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(100,200);
    plane=new Plane(600,height,1200,1);
    stone=new Stone(300,100);
	rubber=new Rubber(800,220,(this.r-20)/2);
	
}


function draw() {
  
  background("lightblue");
  Engine.update(engine);
  
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
}




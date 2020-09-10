
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;
const Render = Matter.Render;

var stone,tree,ground,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var slingShot;
var launchingForce=100;

function preload()
{
	//boy = loadImage("image/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(100,100);
	tree = new Tree(1050,580);
	ground = new Ground(width/2,600,20,20);

	mango1= new Mango(950,230);
	mango2 =new Mango(1100,100);
	mango3 = new Mango(1100,230);
	mango4 = new Mango (900,166);
	mango5 = new Mango (1000,200);
	mango6 = new Mango(1130,80);
	mango7 = new Mango(1120,57);
	mango8 = new Mango(980,140);
	mango9 = new Mango(1010,137);
	mango10 = new Mango(1160,70);

	 slingShot = new Slingshot(stone.body,{x:235,y:420});
	 
	 var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();
  stone.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  slingShot.display();
  

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) ;
}

function mouseReleased()
{
	slingShot.fly();
}

function Collision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
	
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		slingShot.attach(stone.body);
	}
}




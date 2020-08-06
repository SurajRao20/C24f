const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin_img;

function preload()
{ dustbin_img = loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(1530, 730);


	engine = Engine.create();
	world = engine.world;

	paperBall = new Ball(100,600,40)

	ground = new Ground(1000,730,2000,40,{isStatic:true})

	trash1 = new Box(1220, 615, 20,150)
	trash2 = new Box(940, 615, 20,150)
	trash3 = new Box(1080, 700, 300,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();

  paperBall.display();
  ground.display();

  trash1.display();
  trash2.display();
  trash3.display();

 
}

function keyPressed() {
		if (keyCode === UP_ARROW) {
			
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:385,y:-325});

		}
}




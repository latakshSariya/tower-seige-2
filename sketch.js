
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1 , ground2;
var block1 , block2 , block3 , block4 , block5 , block6 ,
 block7 , block8 , block9 , block10 , block11 , block12 , block13 , block14 , block15 , block16;
var hexagon;
var chain1;
var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground1 = new ground(700,600,450,10);
	ground2 = new ground(1200,290,450,10);
	//level 1
	block1 = new block(550,570,100,100)
	block2 = new block(650,570,100,100);
	block3 = new block(750 , 570 , 100,100);
	block4 = new block(850,570,100,100)
	// level 2
	block5 = new block(600 ,470 , 100 , 100)
	block6 = new block(700,470,100,100);
	block7 = new block(800,470,100,100);
	//level 3
	block8 = new block(650 , 370 , 100 , 100);
	block9 = new block(750,370,100,100);
	// level 4
	block10 = new block(700,270,100,100);

	// Hexagon
	hexagon = new pentagon(100,100,100,100)

	//chain
	chain1 = new chain(hexagon.body , {x:200 , y:300} )

	//level1(new pyramid)
	block11 = new block(1100,270,100,100);
	block12 = new block(1200,270,100,100);
	block13 = new block(1302,270,100,100);

	//level2 (new pyramid)
	block14 = new block(1150,170,100,100);
	block15 = new block(1253,170,100,100);

	//level3 (new pyramid)

	block16 = new block(1200,70,100,100);
}


function draw() {
  rectMode(CENTER);
  background(51,44,44);
  drawSprites();
  block1.score();
  fill("red");
  //textSize(30);
  //text("Score: " + score , 100,100)
  ground1.display();
  ground2.display();
  block1.display();
  block14.display();
  fill("brown")
  block2.display();
  block3.display();
  fill("white");
  block15.display();
  block16.display();
  block4.display();
  fill("green");
  block5.display();
  block6.display();
  block7.display();
  block11.display();
  fill("yellow");
  block8.display();
  block9.display()
  block10.display();
  fill("white");
  block12.display();
  block13.display();
  hexagon.display();
  block16.score();
  block15.score();
  block14.score();
  block13.score();
  block12.score();
  block11.score();
  block10.score();
  block9.score();
  block8.score();
  block7.score();
  block6.score();
  block5.score();
  block4.score();
  block3.score();
  block2.score();
  block1.score();
}


function mouseDragged(){
	Matter.Body.setPosition(hexagon.body, {x:mouseX , y:mouseY})
 }
 
 function mouseReleased(){
   chain1.fly();
 }

 function keyPressed(){
	if(keyCode === 32){
	   chain1.attach(hexagon.body);
	   Matter.Body.setPosition(hexagon.body , {x:200 , y:300})
	   console.log(32);
	}
  }
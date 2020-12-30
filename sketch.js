
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper,PaperImg;
var trashcan,trashcanImg;

function preload()
{
	paperImg.loadImage("paper.Img");
	trashcanImg.loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);

	PaperImg.addImage(paper)
	trashcanImg.addImage(trashcan)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	trashcan = new trashcan(700,320,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 Paper.display();
  trashcan.display();
  
  drawSprites();
 
}
function keyPressed(){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
}




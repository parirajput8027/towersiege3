const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var myengine;
 var myworld;
 var block1;
 var block2;
 var block3;
 var block4;
 var block5;
 var block6;
 var block7;
 var block8;
 var block9;
 var block10;
 var block11;
 var block12;
 var ground;
var chain;
var score =0;

function setup()
 {
	createCanvas(800, 600);

	myengine = Engine.create();
	myworld = myengine.world;

  ground = new Ground(200,500,350,20)
  
  shooter = new Shooter(600,200,20)

  chain = new Chain(shooter.body,{x:600,y:200})


    //bottom blocks
      block1 = new Block(200,455,50,50)
	    block2 = new Block(150,455,50,50)
	    block3 = new Block(250,455,50,50)
      block4 = new Block(300,455,50,50)
	     block5 = new Block(100,455,50,50)
      //bottomabove blocks
      block6 = new Block(150,400,50,50) 
       block7 = new Block(200,400,50,50)
       block8 = new Block(250,400,50,50)
       //middleblocks
       block9 = new Block(150,350,50,50)
       block10 = new Block(250,350,50,50) 
       block11 = new Block(200,300,100,30)
       block12 = new Block(200,270,50,50)
      
      

 
	Engine.run(myengine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightblue");
  Engine.update(myengine)
  textSize(20)
  fill("black")
  text("DRAG THE SHOOTER TO HIT BLOCKS",100,50)
  text("PRESS SPACE KEY TO ATTACH THE SHOOTER TO CHAIN",100,100)

  noStroke();
  textSize(20)
  fill("white")
  text("Score:" + score, 500, 50)
 
  block1.display()

  block2.display()

  block3.display()

   block4.display()

   block5.display()

   block6.display()

   block7.display()

   block8.display()

   block9.display()

   block10.display()

   block11.display()

   block12.display()
  

   shooter.display()

   chain.display()

  ground.display()

  drawSprites()
  
}

   function mouseDragged()
   {
    Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
   }


   function mouseReleased()
   {
    chain.fly();
   }


   function keyPressed()
   {
    if(keyCode===32)
    {
  chain.attach(shooter.body)
    }
   }




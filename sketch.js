var garden,rabbit;
var gardenImg,rabbitImg;
var apples 
var apples_1

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apples_1 = loadImage("apple.png")
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX






  spawnapples();
  drawSprites();
}

function spawnapples()
{
  
   apple = createSprite(random(50,350),25,10,10)
   apple.velocityY = -5
   apple.addImage(apples_1)
   apple.scale = 0.1
   apple.lifetime = 80
  


   

   
   
  
   
}
   
  




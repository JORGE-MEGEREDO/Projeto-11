var sea,ship;
var seaImg,shipImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png" , "ship-1.png" ,
                          "ship-2.png" , "ship-1.png")
}

function setup(){
  createCanvas(400,400);
  background("blue");
  
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.25;
}

function draw() {
  background("0");
  sea.velocityX = -3;  
  
  drawSprites();

 
}

var ship, ship_running, ship_stop;
var sea, invisibleSea, seaImage;

function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage =loadAnimation("sea.png");
}


function setup(){
createCanvas(400,400);


sea = createSprite(10,10,50,50);
sea.addAnimation("sea",seaImage)
sea.scale = 0.80
ship = createSprite(50,180,20,40)
ship.addAnimation("running", ship_running);
ship.scale = 0.50;
ship.velocityX = 2
}


function draw() {
  background("blue");

 drawSprites()
}
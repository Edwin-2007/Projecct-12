var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
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

var apple =  Math.round(random(1,2))

if (frameCount % 80 == 0) {

}

}
function createApples() {
apple = createSprite(random(50, 350),40, 10, 20);{
apple.addImage(appleImg)
apple.velocityY = -3
apple.lifetime = 135
}
function createLeaf() {
  leaf = createSprite(random(50, 350),40, 10, 20);{
  lef.addImage(appleImg)
  leaf .velocityY = -3
  leaf.lifetime = 135

function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
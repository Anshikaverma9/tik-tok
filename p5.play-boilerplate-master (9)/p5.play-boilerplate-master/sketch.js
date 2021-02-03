let h = hour();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  text('Current hour:\n' + h, 5, 50);
  drawSprites();
}
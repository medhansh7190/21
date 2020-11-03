function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  bullet=createSprite(200,200,50,50);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  thickness=random(28,83);

}
var bullet, wall;
var speed, thickness;

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
  }

  
  drawSprites();
}
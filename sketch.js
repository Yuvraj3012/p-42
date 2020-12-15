var  hour, minute ,second;



function setup() {
  createCanvas(800,400);
  hr =hour();
mn = minute();
sc = second();
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360)

}

function draw() {
  background(0);  

  push();
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(329,146,10,0 )
pop();
 
strokeWeight(5)
stroke("red")
fill("black")
arc(330, 157, 200, 200, 12, 12 )

  drawSprites();
}
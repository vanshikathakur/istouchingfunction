var mr, fr;

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  fr = createSprite(210, 200, 50, 50);
   
  mr.shapeColor = "purple";
  fr.shapeColor = "purple";

}

function draw() {
  background(255,255,255);  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

  console.log (fr.x - mr.x);
  if(mr.x - fr.x   < fr.width/2 + mr.width/2 && fr.x - mr.x < fr.width/2 + mr.width/2
    && mr.y - fr.y   < fr.width/2 + mr.width/2 && fr.y - mr.y < fr.width/2 + mr.width/2){
    mr.shapeColor = "blue";
    fr.shapeColor = "blue"; 
  }

  else {
    mr.shapeColor = "purple";
    fr.shapeColor = "purple";
  }




  drawSprites();
}
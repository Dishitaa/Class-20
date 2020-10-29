var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(200,100,50,50);
}

function draw() {
  background("lightBlue");  
rect2.y = mouseY;
rect2.x = mouseX;

if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 && rect2.x-rect1.x<=rect2.width/2+rect1.width/2 
  &&rect2.y-rect1.y<=rect1.height/2+rect2.height/2 && rect1.y-rect2.y<=rect1.height/2+rect2.height/2){
    rect1.shapeColor = "purple";
    rect2.shapeColor = "purple";
  }

  else{
    rect1.shapeColor = "gray";
    rect2.shapeColor = "gray";
  }

  drawSprites();
}
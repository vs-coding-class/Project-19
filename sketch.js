var ball,ballimg,paddleimg,paddle;

function preload() {
  ballimg = loadImage("ball.png");
  paddleimg = loadImage("paddle.png")
}

function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(60,200,20,20);
  ball.addImage(ballimg);
  
  paddle = createSprite(380,200,10,70);
  paddle.addImage(paddleimg)
  
  ball.velocityX = -9;
}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);   
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
  paddle.collide(edges);
  
  if(keyWentDown(UP_ARROW)){
    paddle.velocityY = -5;
  }
  if(keyWentUp(UP_ARROW)){
    paddle.velocityY = 0;
  }
  
  if(keyWentDown(DOWN_ARROW)){
    paddle.velocityY = 5;
  }
  if(keyWentUp(DOWN_ARROW)){
    paddle.velocityY = 0;
  }
  
  explosion();
  
  drawSprites();
}

function explosion(){
  if(frameCount%50 === 0){
    ball.velocityY = random(-8,8);
  }
}
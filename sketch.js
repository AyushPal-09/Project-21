var path,car,cash,obstacle1, obstacle2;
var pathImg,carImg,cashImg,obstacle1Img,obstacle2Img;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  carImg = loadImage("car.png");
  cashImg = loadImage("cash.png");
  obstacle1Img = loadImage("obstacle.png");
  obstacle2Img = loadImage("obstacle 2.png");
  
  
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 5;


//creating boy running
car = createSprite(70,580,20,20);
car.addAnimation("car.png",carImg);
car.scale=0.10;
  
  
cashGr=new Group();
obstacle1Gr=new Group();
obstacle2Gr=new Group();


}

function draw() {

  if(gameState===PLAY){
  background(0);
  car.x = World.mouseX;
  
  edges= createEdgeSprites();
  car.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createobstacle1();
    createobstacle2();

    if (cashGr.isTouching(boy)) {
      cashGr.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (obstacle1Gr.isTouching(boy)) {
      obstacle1Gr.destroyEach();
      gameState=END;

    }else if(obstacle2Gr.isTouching(boy)) {
      obstacle2Gr.destroyEach();
      gameState=END;

      
    
        
        
        cashGr.destroyEach();
        obstacle1Gr.destroyEach();
        obstacle2Gr.destroyEach();
        
        
        cashGr.setVelocityYEach(0);
        obstacle1Gr.setVelocityYEach(0);
        obstacle2Gr.setVelocityYEach(0);
    
        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+ treasureCollection,10,30);
}



function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createObstacle1() {
  if (World.frameCount % 320 == 0) {
  var obstacle1 = createSprite(Math.round(random(50, 350),40, 10, 10));
  obstacle1.addImage(obstacle1Img);
  obstacle1.scale=0.10;
  obstacle1.velocityY = 3;
  obstacle1.lifetime = 150;
  obstacle1Gr.add(obstacle1);
}
}

function createObstacle2() {
  if (World.frameCount % 400 == 0) {
  var obstacle2 = createSprite(Math.round(random(50, 350),40, 10, 10));
  obstacle2.addImage(obstacle2Img);
  obstacle2.scale=0.09;
  obstacle2.velocityY = 3;
  obstacle2.lifetime = 150;
  obstacle2Gr.add(obstacle2);
  }
}


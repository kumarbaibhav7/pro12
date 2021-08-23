var path,Runner;
var pathImg,RunnerImg;

function preload(){
  pathImg = loadImage("path.png");
  RunnerImg1 = loadAnimation("Runner-1.png","Runner-1.png",
                             "Runner-2.png","Runner-1.png") ;            
}

function setup(){
  createCanvas(400,400);
  background("black");

  //Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 5;
  path.scale=0.3;


  Runner = createSprite(130,200,30,30);
  Runner.addAnimation("movingRunner",RunnerImg1);
  Runner.scale =0.25;

}

function draw(){
  background(0);
  path.velocityY = 3;


  //code to reset the background
  if(path.x < 0){
    path.x = path.width/8;
  }

  drawSprites();
}




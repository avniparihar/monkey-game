
var monkey , monkey_running;
var survivalTime = 0;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload()
{
  
  //load the animations
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstaceImage = loadImage("obstacle.png");
}



function setup() 
{
  createCanvas(450,450);
  
//creating monkey  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;

  
//creating ground
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);

obstacleGroup =new Group();
foodGroup =new Group();
}


function draw() 
{
  background("brown");
  
  

if(obstacleGroup.isTouching(monkey))
{ 
ground.velocityX = 0;
monkey.velocityY = 0;
obstacleGroup.setVelocityXEach(0);
foodGroup.setVelocityXEach(0);
obstacleGroup.setLifetimeEach(-1); 
foodGroup.setLifetimeEach(-1);
}
  //to make the ground move till infinity
if(ground.x<0)
  {
  ground.x=ground.width/2; 
  }
  
 //to make the monkey jump when space is pressed 
if(keyDown("space"))
  {
  monkey.velocityY = -15; 
  }
  
monkey.velocityY = monkey.velocityY+0.9;
  
  // monkey collide with the ground
monkey.collide(ground);
  
  // to display and update the score
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:" +survivalTime,100,50);
  
bananas();
obstacles();
   //to display the sprites
  drawSprites();
}

function bananas()
{
if (frameCount % 80 === 0)
{ 
banana = createSprite(600,250,40,10); 
banana.y = random(120,200);
banana.velocityX = -5;
banana.lifetime = 300;
monkey.depth = banana.depth + 1;
banana.addImage(bananaImage);
banana.scale=0.1; 
foodGroup.add(banana);
}

}

function obstacles()
{
if(frameCount % 300===0)
{
obstacle = createSprite(600,330,10,10);
obstacle.x = random(10,250);
obstacle.velocityX=-4;
obstacle.lifetime = 300;
obstacle.addImage(obstaceImage);
obstacle.scale = 0.1;
obstacleGroup.add(obstacle);
}

}
   
   
   
   
   
   

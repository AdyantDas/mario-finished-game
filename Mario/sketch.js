var mario,marioWalking,mushroom,MIM,turtle,TIM,MGRP,TGRP
var pipe,pipeOut,pipee,PGRP,bench
var background,BIM
var ground
var score=0;

function preload(){
marioWalking=loadAnimation("1.png","2.png","3.png");
BIM=loadImage("background.png")
MIM=loadImage("MIM.png");
TIM=loadImage("TIM.png");
pipe=loadImage("pipee.png");
pipeOut=loadImage("pipee2.png")
bench=loadImage("bench.png");


}
function setup(){
createCanvas(1500,600);
mario=createSprite(200,425,10,10)
mario.addAnimation("marioWalking",marioWalking);
mario.scale=0.05

ground=createSprite(200,500,1200,5)
ground.velocityX=-2
ground.visible=false

MGRP=new Group();
TGRP=new Group();
PGRP=new Group();

}
function draw(){
background(BIM);
if(ground.x<0){
    ground.x=ground.width/2
}





mario.velocityY=mario.velocityY+0.8;


spawnMushroom();
spawnTurtle();
spawnPipe();

if(MGRP.isTouching(mario)){
    MGRP.destroyEach();
    mario.scale=mario.scale-0.01
}

if(TGRP.isTouching(mario)){
    TGRP.destroyEach();
    mario.scale=mario.scale+0.01
}

if(PGRP.isTouching(mario)){
    mario.visible=false;
}else {
    mario.visible=true
}




mario.collide(ground);
    drawSprites()
}
function keyPressed(){
    if(keyCode===32){
        console.log("mario")
    mario.velocityY=-20
    }
}

function spawnMushroom(){
  
        if(World.frameCount%120===0){
        mushroom=createSprite(width,random(50,600),10,10);
          mushroom.scale=0.2;
          r=Math.round(random(1,4));
          if(r===1){
            mushroom.addImage(MIM);
          }else if (r===2){
            mushroom.addImage(MIM);          
        }else if (r===3){
            mushroom.addImage(MIM);          
        }else if (r===4){
            mushroom.addImage(MIM);         
         }
          mushroom.y=Math.round(random(50,340));
          
          mushroom.velocityX=-7
          mushroom.setLifetime=100;

    MGRP.add(mushroom);

    }
}

function spawnTurtle(){
  
    if(World.frameCount%120===0){
    turtle=createSprite(width,height-200,10,10);
      turtle.scale=0.2;
      r=Math.round(random(1,4));
      if(r===1){
        turtle.addImage(TIM);
        turtle.scale=0.05
      }else if (r===2){
        turtle.addImage(TIM); 
        turtle.scale=0.05         
    }else if (r===3){
        turtle.addImage(TIM); 
        turtle.scale=0.05       
    }else if (r===4){
        turtle.addImage(TIM); 
        turtle.scale=0.05       
     }
      turtle.y=Math.round(random(50,340));
      
      turtle.velocityX=-7
      turtle.setLifetime=100;

TGRP.add(turtle);

}
}
function spawnPipe(){
    if(World.frameCount%120===0){
        pipee=createSprite(width,500,10,10);
          pipee.scale=0.2;
          r=Math.round(random(1,4));
          if(r===1){
            pipee.addImage(pipe);
          }else if (r===2){
            pipee.addImage(pipeOut);         
        }else if (r===3){
            pipee.addImage(pipe);          
        }else if (r===4){
            pipee.addImage(pipeOut);         
         }
         
          
          pipee.velocityX=-7
          pipee.setLifetime=100;

          PGRP.add(pipee);
}
}
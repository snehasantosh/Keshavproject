
var pr1
var pr2 
var l1,l2
var top,left,bottom,right
PLAY=0

var gameState = "start";
var b1,b2;  
var re
var not
var bg2
var sps
var d1,d2

var edges
var score1 = 0
var score2 =0
function preload(){
  
bg_img=loadImage("sher.jpg")
  pr1_img=loadAnimation("y1.png","y2.png","y3.png","y4.png")
  pr1_stand=loadImage("y1.png")
  pr2_stand=loadImage("p1.png")
  pr2_img=loadAnimation("p1.png","p2.png","p3.png")
  pr2_hit = loadImage("p6.png")
  sps_img=loadImage("sps.png")
    line_img=loadImage("l1.png")
  line2_img=loadImage("l2.png")
  bullet_left=loadImage("output-onlinepngtools (13).png")
  bullet_right=loadImage("output-onlinepngtools (14).png")
  re_img=loadImage("re.png")
  notice_img=loadImage("INSTRU~1.PNG")
  bg2_img=loadImage("sun.png")
  d1_img=loadImage("d2.png")
  d2_img=loadImage("d1.png")
  
}
function setup(){
  createCanvas(1535,700)

  //creates Boundaries
edges = createEdgeSprites()

  pr1=createSprite(75,325,20,20)
  pr1.addImage("you",pr1_stand)
  pr1.visible=false 

  pr2=createSprite(1450,325,20,20)
  pr2.addImage("hehe",pr2_stand);
   pr2.scale=0.4
   pr2.visible=false



//starting lines

l1=createSprite(200,325,20,20)
l1.addImage("jo",line_img)
l1.scale=1
l1.visible=false
  
l2=createSprite(1350,325,20,20)
l2.addImage("jo",line2_img)
l2.scale=1
l2.visible=false


b1group = new Group()


}
function draw(){

  background(0);


//Not letting the players going outside of the canvas
pr1.bounceOff(edges);
pr2.bounceOff(edges);
//1st Game State
if(gameState==="start"){


textSize(50);
  text("Rules",700,60);
  textSize(20);
  text("Player 1 - W,A,S,D",700,160);
  text("Player 2 - W,A,S,D",700,260);
 stroke("Blue");

 text("Press Space to Start",600,400);

 if(keyDown("Space")){
  gameState="play"
}

}

//2nd State
if(gameState==="play"){
background(bg2_img);

  text("Score ="+score1,70,60);
  pr1.visible=true  ;
  pr2.visible=true;
  l1.visible=true;
  l2.visible=true;

  //players cant go outside the lines
  pr1.bounceOff(l1);
  pr2.bounceOff(l2);

  l1.velocityY=4;
  l2.velocityY=4;
  pr1.bounceOff(l1);
  pr2.bounceOff(l2);

    //key code for pr1
      
    if(keyDown("w")){
      pr1.y -= 10;
      pr1.changeAnimation("you",pr1_img)
        }

    if(keyDown("a")){
    pr1.x -= 10;
    pr1.addAnimation("you",pr1_img)
    }

    if(keyDown("s")){
    pr1.y += 10;
    pr1.addAnimation("you",pr1_img)
    }

    if(keyDown("d")){
      pr1.x += 10;
      pr1.addAnimation("you",pr1_img)
      }


  //key down for pr2
    if(keyDown("up")){
      pr2.visible=false
    pr2.y -= 10;
 
    }
      
    if(keyDown("left")){
    pr2.x -= 10;
    pr2.visible=false
    
    }
      
  if(keyDown("down")){
  pr2.y += 10;
  pr2.visible=false
    }
      
    if(keyDown("right")){
  pr2.x += 10;
  pr2.visible=false
      }



//Left bullet
if(keyDown("z")){


 spawnbullet1()
  
}
if(b1group.isTouching(pr2)){
  pr2.changeImage("hit",pr2_hit)
b1group.destroyEach();
score1 += 1
}
  }

//3rd State
if(gameState==="end"){
  background(bg2_img);


}
drawSprites();
console.log(gameState)
}


function spawnbullet1(){


b1=createSprite(pr1.x+30,pr1.y,20,20)

b1.addImage("k",bullet_right)
b1.scale=0.2

b1.velocityX=10
b1group.add(b1)
}
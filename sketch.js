var backGround,backGroundImg;
var mouse,mouseImg,mouseImg1,mouseImg2,mouseImg3;
var tom,tomImg,tomImg2,tomImg3; 
var mouse_collide

function preload() {

  backGroundImg =loadImage("garden.png");
  mouseImg =loadAnimation("images/mouse1.png");
  mouseImg1 =loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImg2 =loadAnimation("images/mouse4.png");
  
  tomImg  =loadAnimation("images/cat1.png");
  tomImg2  =loadAnimation("images/cat2.png","images/cat3.png");
  tomImg3 = loadAnimation("images/cat4.png");
}

function setup(){
    
  canvas= createCanvas(600,600);
    
   mouse=createSprite(95,500);
   mouse.addAnimation("mouse",mouseImg)
   mouse.scale=0.1
  
   tom= createSprite(450,500);
   tom.addAnimation("tom",tomImg)
   tom.scale=0.1
   
}

  
  
 

function draw() {
     background(backGroundImg);

    if(tom.x-mouse.x<100)
   
    
    {
      tom.velocityX=0;
      tom.addAnimation("tomLastImage", tomImg3);
      tom.x =150;
      tom.scale=0.1;
      tom.changeAnimation("tomLastImage");
      mouse.addAnimation("jerryLastImage", mouseImg2);
      mouse.scale=0.1;
      mouse.changeAnimation("jerryLastImage");
      
    }  

    drawSprites();
}





function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
    mouse.addAnimation ("mouse1",mouseImg1)
    tom.addAnimation("tom1",tomImg2)
  
    tom.changeAnimation("tom1")
    tom.velocityX=-2
   // mouse.frameDelay=25
    mouse.changeAnimation("mouse1")
    
  
  }
 

}

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png")
  green_balloonImage = loadImage("green_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

redb = new Group();
blueb = new Group();
greenb = new Group();
pinkb = new Group();
arrowgroup = new Group();

  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if(arrowgroup.isTouching(redb)){
      redb.destroyEach();
      arrowgroup.destroyEach();
      score = score+2
    }
    if(arrowgroup.isTouching(blueb)){
      blueb.destroyEach();
      arrowgroup.destroyEach();
      score=score+1
    }
    if(arrowgroup.isTouching(greenb)){
      greenb.destroyEach();
      arrowgroup.destroyEach();
      score = score+0.5
    }
    if(arrowgroup.isTouching(pinkb)){
      pinkb.destroyEach();
      arrowgroup.destroyEach();
      score=score+10
    }

    
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      createRedBalloon();
    } else if(select_balloon==2){
      createBlueBalloon();
    } else if(select_balloon==3){
      createGreenBalloon();
    } else{
      createPinkBalloon();
    }
      

  }
  
  drawSprites();

  //score
  text("score: "+ score, 270 , 30)
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function createRedBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redb.add(red)
  

}

function createBlueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10)
  blue.addImage(blue_balloonImage)
  blue.velocityX = 5
  blue.lifetime = 150
  blue.scale = 0.1
  blueb.add(blue)
  
}

function createGreenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10)
  green.addImage(green_balloonImage)
  green.velocityX = 4
  green.lifetime = 150
  green.scale = 0.2
  greenb.add(green)
  
}

function createPinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20,370)),10,10)
  pink.addImage(pink_balloonImage)
  pink.velocityX = 6
  pink.lifetime = 150
  pink.scale = 0.3
  greenb.add(green)
  

}

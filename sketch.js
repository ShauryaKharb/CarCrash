var wall;
var car;
var speed;
var weight;
var deform;

function setup() {
  createCanvas(800,600);

  speed=Math.round(random(55,90));

  weight=Math.round(random(400,1500));

  car=createSprite(100,300,20,20);
  car.shapeColor="#34e8eb";
  car.velocityX=speed;

  wall=createSprite(700,300,20,80);
  wall.shapeColor="white";

//==========================================================================================================//
//                                               END SETUP                                                  //
//==========================================================================================================//

}

function draw() {
  background(0);

 /* if (movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor="green";

  }else{
  fixedRect.shapeColor="red";
  }
  console.log(movingRect.x-fixedRect.x);
 */

 if (wall.x-car.x<(car.width+wall.width)/2){
   car.velocityX=0;

   deform=(0.5*weight*speed*speed)/22500

   if (deform<100){
     car.shapeColor="green";
   }
   if (deform>100 && deform<180){
    car.shapeColor="yellow";
  }
  if (deform>180){
    car.shapeColor="red";
  }
 }


  drawSprites();

//==========================================================================================================//
//                                               END DRAW                                                   //
//==========================================================================================================//
}

var car, wall;
var speed, weight;

function preload()
{
	
}

function setup()
{
	createCanvas(1600, 400);

	speed=random(55,90)
	weight=random(400,1500)
	car = createSprite(50,200,50,50)
	wall = createSprite(1200,200,50,350)

  
}


function draw() {

  background(0);
  car.velocityX = speed;
  var result = broom();
  if (result === true){
  car.velocityX = 0;
	  var deformation = 0.5 * weight * speed * speed/22509
	  console.log(deformation)
	  if (deformation>180)
	  {
		  car.shapeColor="red"
	  }
	  if (deformation<180 && deformation>100)
	  {
		  car.shapeColor="yellow"
	  }
	  if (deformation<100)
	  {
		  car.shapeColor="green"
	  }
	}
  drawSprites();
  }
  
 
  function broom (){
  if(wall.x-car.x<=(car.width+wall.width)/2)
  {
	return true  
	
  }
  else 
  {
	  return false
  }
}
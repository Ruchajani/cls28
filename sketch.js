//namespacing 
//if we store some data in a variable we can call that data
//by that variable name
const World=Matter.World
const Engine=Matter.Engine
const Bodies= Matter.Bodies
var newEngine,newWorld
var ball,ground;
function setup()
{
  createCanvas(400,400);
  //create a new Engine
  //Matter.Engine.create()
  newEngine=Engine.create()
  //new world
  //engine.world
  newWorld= newEngine.world
  //new body
  //Matter.Bodies.rectangle(x,y,width,height,optional)
  var ball_option={restitution:1.3}
ball=Bodies.rectangle(200,200,50,50,ball_option)
//Matter.World.add(world,body)
World.add(newWorld,ball)
//{key:value}
var option={isStatic:true}
//star=createSprite(200,200,50,50)
//star.x=starBody.position.x
ground=Bodies.rectangle(200,380,400,10,option)
World.add(newWorld,ground)

console.log(ball)
console.log(ground)
}
function draw()
{
  background("red")
  //Matter.Engine.update(engine)
  Engine.update(newEngine)
  //rect(x,y,width,height)
  var position=ball.position
  rectMode(CENTER)
  rect(position.x,position.y,50,50)
  rect(ground.position.x,ground.position.y,400,10)
}
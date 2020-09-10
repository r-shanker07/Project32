const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  var options = {
    'restitution':0.3,
    'friction':.5,
    'density':.5
  }
  polygon = Bodies.circle(50,200,20,options)
  World.add(world, polygon)

  ground = new Ground(400,380,800,30)
  stand = new Ground(500,240,300,20)

  block1 = new Block(430,235,30,40)
  block2 = new Block(460,235,30,40)
  block3 = new Block(490,235,30,40)
  block4 = new Block(520,235,30,40)
  block5 = new Block(550,235,30,40)
  block6 = new Block(400,235,30,40)
  block7 = new Block(580,235,30,40)

  block8 = new Block(460,175,30,40)
  block9 = new Block(490,175,30,40)
  block10 = new Block(520,175,30,40)
  block11 = new Block(430,175,30,40)
  block12 = new Block(550,175,30,40)

  block13 = new Block(490,135,30,40)
  block14 = new Block(460,135,30,40)
  block15 = new Block(520,135,30,40)

  block16 = new Block(490,95,30,40)

  slingshot = new Slingshot(polygon,{x:100,y:200})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();

  circle(polygon.position.x,polygon.position.y,20)

  ground.display()
  stand.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()

  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()

  block13.display()
  block14.display()
  block15.display()

  block16.display()

  slingshot.display()
  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
      slingshot.attach(polygon)
  }
}
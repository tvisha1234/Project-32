const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground; 
var stand;
//layer 1
var block1, block2, block3, block4, block5, block6, block7;
//layer 2
var block8, block9, block10, block11, block12;
//layer 3
var block13, block14, block15;
//layer 4
var block16;

var polygon;
var slingshot;

var score = 0;

var bg = "bg.png";
var backgroundImg;

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,390,800,30);
  stand = new Ground(400,215,200,10);

  //layer 1
  block1 = new Block(400,200);
  block2 = new Block(380,200);
  block3 = new Block(360,200);
  block4 = new Block(420,200);
  block5 = new Block(440,200);
  block6 = new Block(460,200);
  block7 = new Block(340,200);

  //layer 2
  block8 = new Block(400,170);
  block9 = new Block(380,170);
  block10 = new Block(360,170);
  block11 = new Block(420,170);
  block12 = new Block(440,170);

  //layer 3
  block13 = new Block(380,140);
  block14 = new Block(400,140);
  block15 = new Block(420,140);

  //layer 4
  block16 = new Block(400,110);

  polygon = new Polygon(50,200,20);

  slingshot = new SlingShot(polygon.body, {x:100,y:160});

}

function draw() {
  if(backgroundImg) {
    background(backgroundImg);
}
  
  Engine.update(engine);

  text("Score: "+ score, 700, 40);

  ground.display();
  stand.display();

  //layer 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();

  //layer 2
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  //layer 3
  block13.display();
  block14.display();
  block15.display();

  block13.score();
  block14.score();
  block15.score();

  //layer 4
  block16.display();

  block16.score();

  polygon.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    slingshot.attach(polygon.body);
  }
}

async function getBackgroundImg() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour >= 06 && hour <= 18) {
      bg = "bg.png";
  }
  else {
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
}
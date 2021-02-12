const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, gameState, home;
var player, wall1, wall2, wall3, wall4;

function preload() {
  homeImg = loadImage("home.png");
  goImg = loadImage("go.png");

  jumpSound = loadSound("jump.mp3");
  winSound = loadSound("tada.mp3");

}
function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;
 
  gameState = "start";

  home = new Home(720,390,100,10);
  player = new Player(100,300,40);
  ground = new Ground(400,400);
  wall1 = new Wall(200,250);
  wall2 = new Wall(400,150);
  wall3 = new Wall(600,250);
 


}

function draw() {
  Engine.update(engine);
  if(gameState ==="start"){
    background("black");
    textSize(20);
    fill("red");
    text("Press UP ARROW to start and bring the pogoman home",50,200);

    if(keyCode === UP_ARROW){
      gameState = "play";
      
    }
  }
 if(gameState === "play"){
   background(0);
   home.display();
   player.display();
   imageMode(CENTER);
   image(homeImg,width-77,360,130,150);
   wall1.display();
   wall2.display();
   wall3.display();
 }
 if(player.body.position.x > 700 && player.body.position.x <800 && player.body.position.y >=340){
   gameState = "end";
 }
if(gameState === "end"){
  background(0);
  textSize(30);
  text("YOU WON",380,200);
  winSound.play();
}
if(player.body.position.x>800){
  gameState = "lose";
  background(0);
  imageMode(CENTER);
  image(goImg,400,200,100,100);
  
}

//camera.position.x = player.body.position.x+150;

}

function keyPressed() {
  if(keyCode === UP_ARROW && gameState === "play"){
    Matter.Body.applyForce(player.body,player.body.position,{x: 0,y:-100});
   jumpSound.play();
     }
     if(keyCode === LEFT_ARROW && gameState === "play"){
      Matter.Body.applyForce(player.body,player.body.position,{x: -50,y: 0});
     
       }  if(keyCode === RIGHT_ARROW && gameState === "play"){
        Matter.Body.applyForce(player.body,player.body.position,{x: 50,y: 0});
       
         }
}

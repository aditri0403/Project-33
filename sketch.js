var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var division = [];
var score = 0;
var gameState = "start";

var particlescore;
var turn = 0;

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
      division.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
 turn = turn + 1;
  if(turn === 5){
     gameState = "end";
     text("Game Over", 400,300);
  }
  
  textSize(20)
  text("SCORE : "+ score,100,50);
  text("500",20,600);
  text("500",100,600);
  text("500",180,600);
  text("500",260,600);
  text("100",340,600);
  text("100",420,600);
  text("100",500,600);
  text("200",580,600);
  text("200",660,600);
  text("200",740,600);
  Engine.update(engine);
 

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
   
}
function mousePressed(){
   if(gameState!=="end")
   {
      score++;
      particle = new Particle (mouseX,10,10,10);
   }
}
if(particles!==null){
   particles.display();

   if(particles.body.position.y >760){
      if(particles.body.position.x<300){
         score = score+500;
         particles=null;
         if(count>=5) gameState = "end";   
      }
   }
}
if(particles!==null){
   particles.display();

   if(particles.body.position.y >760){
      if(particles.body.position.x<301 && particle.body.position.x>600){
         score = score+100;
         if(count>=5) gameState = "end";   
      }
   }
         particles=null;
}
if(particles!==null){
   particles.display();

   if(particles.body.position.y >760){
      if(particles.body.position.x<601 && particle.body.position.x>900){
         score = score+200;
         particles=null;
         if(count>=5) gameState = "end";   
      }
   }
}
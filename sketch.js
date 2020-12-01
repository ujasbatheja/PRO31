
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particle1,particle2,particle3,particle4,particle5,particle6,particle7,particle8,particle9,particle10,particle11,particle12;
var division1, division2, division3, division4, division5, division6, division7;
var plinko1,plinko2,plinko3,plinko4,plinko5,plink6,plinko7,plinko8;
var plinko9,plinko10,plinko11,plinko12,plinko13,plink14,plinko15,plinko16,plinko17;
var plinko18,plinko19,plinko20,plinko21,plinko22,plink23,plinko24,plinko25;
var plinko26,plinko27,plinko28,plinko29,plinko30,plink31,plinko32,plinko33,plinko34;

function setup() {
  var canvas = createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,680,1200,20);

  particle1 = new Particles(10,10,10);
  particle2 = new Particles(50,10,10);
  particle3 = new Particles(90,10,10);
  particle4 = new Particles(130,10,10);
  particle5 = new Particles(170,10,10);
  particle6 = new Particles(210,10,10);
  particle7 = new Particles(250,10,10);
  particle8 = new Particles(290,10,10);
  particle9 = new Particles(330,10,10);
  particle10 = new Particles(370,10,10);
  particle11 = new Particles(410,10,10);
  particle12 = new Particles(450,10,10);

  division1 = new Division(484,400,10,600);
  division2 = new Division(400,570,10,200);
  division3 = new Division(330,570,10,200);
  division4 = new Division(260,570,10,200);
  division5 = new Division(190,570,10,200);
  division6 = new Division(120,570,10,200);
  division7 = new Division(50,570,10,200);

  plinko1 = new Plinko(600,380,20);
  plinko2 = new Plinko(520,380,20);
  plinko3 = new Plinko(440,380,20);
  plinko4 = new Plinko(360,380,20);
  plinko5 = new Plinko(280,380,20);
  plinko6 = new Plinko(200,380,20);
  plinko7 = new Plinko(120,380,20);
  plinko8 = new Plinko(40,380,20);

  plinko9 = new Plinko(640,300,20);
  plinko10 = new Plinko(560,300,20);
  plinko11 = new Plinko(480,300,20);
  plinko12 = new Plinko(400,300,20);
  plinko13 = new Plinko(320,300,20);
  plinko14 = new Plinko(240,300,20);
  plinko15 = new Plinko(160,300,20);
  plinko16 = new Plinko(80,300,20);
  plinko17 = new Plinko(0,300,20);

  plinko18 = new Plinko(600,220,20);
  plinko19 = new Plinko(520,220,20);
  plinko20 = new Plinko(440,220,20);
  plinko21 = new Plinko(360,220,20);
  plinko22 = new Plinko(280,220,20);
  plinko23 = new Plinko(200,220,20);
  plinko24 = new Plinko(120,220,20);
  plinko25 = new Plinko(40,220,20);

  plinko26 = new Plinko(640,140,20);
  plinko27 = new Plinko(560,140,20);
  plinko28 = new Plinko(480,140,20);
  plinko29 = new Plinko(400,140,20);
  plinko30 = new Plinko(320,140,20);
  plinko31 = new Plinko(240,140,20);
  plinko32 = new Plinko(160,140,20);
  plinko33 = new Plinko(80,140,20);
  plinko34 = new Plinko(0,140,20);

}

function draw() {
  background("black");  
  Engine.update(engine);
  
  ground.display();

  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();
  particle11.display();
  particle12.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();

  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();

  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();

  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();

  drawSprites();
}
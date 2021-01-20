
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 700, width, 300);

	boy = createSprite(400, 500, 30, 30);
	boy.addImage(boyImg);
	boy.scale = 0.15;

	tree = new Tree(900, 350, 500, 500);

	stone = new Stone(320, 415, 30, 30);

	mango1 = new Mango(900, 300, 1);
	mango2 = new Mango(970, 270, 1);
	mango3 = new Mango(840, 240, 1);
	mango4 = new Mango(810, 330, 1);
	mango5 = new Mango(1100, 350, 1);
	mango6 = new Mango(1050, 260, 1);
	mango7 = new Mango(910, 200, 1);
	mango8 = new Mango(730, 300, 1);
	mango9 = new Mango(980, 170, 1);
	mango10 = new Mango(830, 170, 1);

	chain = new Chain(stone.body, {x: 320, y: 415})

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(173,216,230);

	drawSprites();

	ground.display();

	boy.display();

	tree.display();

	stone.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
    gameState = "launched";
}

function detectCollision(lstone, lmango){
	mangoPos = lmango.body.position;
	stonePos = lstone.body.position;

	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 320, y: 415});
		chain.attach(stone.body);
	}
}
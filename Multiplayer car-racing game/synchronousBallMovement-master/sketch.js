var hypnoticBall, database;
var position;

var gameState=0;
var Playercount;

var form,player,game;
var allPlayer,distance=0;

var car1,car2,car3,car4;
var cars,car1Image,car2Image,car3Image,car4Image,trackImage,groundImage;

var bronzeImg;
var goldImg,silverImg;
var gameOverImg;

function preload(){
car1Image=loadImage("car1.png");
car2Image=loadImage("car2.png");
car3Image=loadImage("car3.png");
car4Image=loadImage("car4.png");

groundImage=loadImage("ground.png");
trackImage=loadImage("track.png");
gameOverImg=loadImage("gameOver.png");

bronzeImg=loadImage("bronze.png");
silverImg=loadImage("silver.png");
goldImg=loadImage("gold.png");
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-20);
  game=new Game();
  game.getState();
  game.start();
}
function draw(){
 
 if(Playercount===4){
   game.update(1);
 }

 if(gameState===1){
   clear()
   game.play();
 }

 if(gameState===2){
   game.end();
 }

  if(player.rank===4){
    game.displayRank();
  }

}

function showError(){
  console.log("Error in writing to the database");
}


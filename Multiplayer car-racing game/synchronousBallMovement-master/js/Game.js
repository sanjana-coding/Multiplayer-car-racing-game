class Game{
    constructor(){

    }

 getState(){
     var gameStateref=database.ref("gameState");
     gameStateref.on("value",function (data){
        gameState=data.val();
     })
    }
 

 update(state){
  database.ref("/").update({gameState:state})
 }

 async start(){
     if(gameState===0){
         player=new Player();
         player.getCount();
         form=new Form();
         form.display();
     }

     car1=createSprite(100,200);
     car1.addImage(car1Image);

     car2=createSprite(300,200);
     car2.addImage(car2Image);

     car3=createSprite(500,200);
     car3.addImage(car3Image);

     car4=createSprite(700,200);
     car4.addImage(car4Image);

     cars=[car1,car2,car3,car4];


 }


  play(){
  form.hide();
  //text("Game start",120,100);
  Player.getPlayerinfo();
  player.getCarsatend();
   
  if(allPlayer!==undefined){
    background(groundImage);
    image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
      //var displayPosition=130;
      var index=0;

      //x and y position of the car
      var x=175;
      var y

      for(var tlr in allPlayer){
          index=index+1;

          //position the car a little far from each other in x direction
          x=x+200;

          //use data from the database to display the cars in y direction
          y=displayHeight-allPlayer[tlr].distance;

          cars[index-1].x=x;
          //console.log(cars[index-1].x);
          cars[index-1].y=y;

          if(index===player.index){
          
          fill("red");
          ellipse(x,y,60,100);
          cars[index-1].shapeColor="red"

          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y;
          }

         
      //displayPosition+=20;
      //text(allPlayer[tlr].Name + ": "+ allPlayer [tlr].distance,120,displayPosition);
  }

  }
  
  if(keyIsDown(UP_ARROW)&& player.index!==null){
      player.distance+=50;
      console.log(player.distance)
      player.update();
  }
   
  if(player.distance>3850){
      gameState=2;
      player.rank+=1;
      Player.updateCarsatend(player.rank);

  }
   drawSprites();
}
  
  end(){
      camera.position.x=0;
      camera.position.y=0;
      imageMode(CENTER);
      image(gameOverImg,width/-4+400,displayHeight/-4+200,2000,1000);
      console.log("Game has ended");
      console.log(player.rank);
      
  }

  displayRank(){
    camera.position.x=0;
    camera.position.y=0;

    imageMode(CENTER);
    Player.getPlayerinfo();
    if(allPlayer!==undefined){
      var index=0;
      for(var plr in allPlayer){
          var rank=allPlayer[plr].rank
          index=index+1;
      }
      if(index===player.index){
          if(rank===1){
              image(goldImg,width/-4+400,displayHeight/-4+200,2000,1000);
          }
          else if(rank===2){
            image(silverImg,width/-4+400,displayHeight/-4+200,2000,1000);
          }
          else if(rank===3){
            image(bronzeImg,width/-4+400,displayHeight/-4+200,2000,1000); 
          }
      }
    }
  }

}

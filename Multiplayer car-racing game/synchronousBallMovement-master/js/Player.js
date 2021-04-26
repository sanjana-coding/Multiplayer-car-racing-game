class Player{
    constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
    this.rank=null;
    }

  getCount(){
      var Playercountref=database.ref("Playercount")
      Playercountref.on("value",function (data){
          Playercount=data.val()
      })
  }
  updateCount(count){
  database.ref("/").update({
      Playercount:count
  })
  }

  update(){
      var playerindex="Players/Player"+this.index
      database.ref(playerindex).set({
       Name:this.name,
       distance:this.distance
       })
  }
    
     static getPlayerinfo(){
     var playerInforef=database.ref("Players")
     playerInforef.on("value",(data)=>{
         allPlayer=data.val();
     })
     }

     static updateCarsatend(rank){
    database.ref("/").update({
        Carsatend:rank
    })
     }

     getCarsatend(){
         database.ref("Carsatend").on("value",(data)=>{
             this.rank=data.val();
         })
        }
     }
   











class Form{
    constructor(){
    this.input=createInput("name");
    this.button=createButton("play");
    this.greeting=createElement("h2");
    this.reset=createButton("Restart");
    }
   
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title=createElement("h2")

        title.html("Multiplayer Car-Racing Game")
        title.position(displayWidth/2-120,0)

        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name=this.input.value();
        Playercount+=1
        player.index=Playercount;

        player.update();
        player.updateCount(Playercount)

        this.greeting.html("Hi "+player.name +"!")
        this.greeting.position(displayWidth/2-20,displayHeight/3)
        })

      this.reset.mousePressed(()=>{
          player.updateCount(0);
          game.update(0);
          database.ref("/").update({
              Players:null,
              Carsatend:0
          })
      })

    }

}
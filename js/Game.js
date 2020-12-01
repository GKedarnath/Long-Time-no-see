class Game{
    constructor(){

    }

 getState(){
     var gameStateref = database.ref('gameState')
     gameStateref.on("value",function(data){
         gameState = data.val()
     })

 }

 update(state){
     database.ref('/').update({
         gameState:state
     })
 }

 async start(){
     if(gameState === 0){
         player = new Player();
         var playerCountref = await database.ref('playerCount').once("value");
         if(playerCountref.exists()){
             playerCount = playerCountref.val();
         player.getCount();
         }
         form = new Form();
         form.display();
         

     }

      pixar = createSprite(100,200);
      car2 = createSprite(300,200);
      car3 = createSprite(500,200);
      car4 = createSprite(700,200);
      
      cars = [pixar,car2,car3,car4];


 }

 play(){
    form.hideForm();
    //textSize(30);
   // text("GAMESTART",120,100);
   Player.getplayerInfo();

   if(allPlayers!==undefined){

     var index = 0;
     var x = 0;
     var y ;

        //var display_position  = 130
        for(var plr in allPlayers){

            index = index+1;
            x = x+200;
            y = displayHeight-allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;

            if(index === player.index){
                cars[index-1].shapeColor = "red"
                camera.position.x = displayWidth/2
                camera.position.y = cars[index-1].y
            }

            if(plr === "player" +player.index)
            fill("red");
            else
            fill("black");
           // display_position+20
            //textSize(15);
           // text(allPlayers[plr].name+ ": " +allPlayers[plr].distance,120,display_position);

        }
   }

if(keyIsDown(UP_ARROW)&& player.index!==null){
    player.distance+=50
    player.update();

}
drawSprites();

}

}
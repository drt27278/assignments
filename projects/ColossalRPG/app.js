

var readlineSync = require("readline-sync");

//////////////
//variables// 
////////////

var player = {
    name:"",
    HP: 100,

};

var gameLoopOptions = ["walk", "print"];

var enemyTypes = ["Orc", "Troll", "Dark Elf"];

var userOptions = ["Attack", "Run Away"];

 /////////////////////////
//constructor functions//
////////////////////////

function Enemy(type, HP){
    this.type = type;
    this.HP = HP;
    this.attack = function(){
        //attack
    };

}


 ////////////
//functions//
////////////

function walk(){
    //create random fight
   var battleChance = Math.floor(Math.random() * 3);
    //check if fight occured
    if(battleChance === 1){
        console.log("You got in a fight!");
        fight();
 //else
    }else {

        console.log("You walked for a little bit...");
    }
       

        //dont get in a fight-start over
}

function fight(){
    var currentEnemy = generateEnemy();
    
    }
    // while(player.HP > 0){
    //     var userOption = readlineSync.keyInSelect(userOptions, "Would you like to stay and fight?");
    //     console.log(userOption);
    //     if(userOption === 1){
    //         fight();

    //     }else if(userOption === 0) {
    //         console.log("You ran away, like the coward you are!");

    //     }else if (userOption === -1){
    //         console.log("Again...you can't do that bruh");
    //     }

    //key in select battle options
        //if attack
            //var playrPower = player.attack()
// `}

function generateEnemy(){
    var enemyChance = Math.floor(Math.random() * 3);
    //var newEnemy
    //if 0
        //newEnemy = new Enemy(enemyTypes[0])
    //else if 1
        //new Enemy
    //else if 2
        //new Enemy()
        
    //return newEnemy    
       
}
 /////////////
//game loop//
////////////


player.name = readlineSync.question("WHAT IS YOUR NAME ADVENTURER?");
console.log("GREETINGS " + player.name + " WE NEED YOUR HELP!");

var help = readlineSync.keyInYN("READY PLAYER ONE?!");
    if (help === true){
        console.log("PLAYER HAS ACCEPTED THE DANGEROUS QUEST");
    }else {
        console.log("YOU'RE A WUSS, GAME OVER!");
    }

    while(player.HP > 0){
     var userChoice =  readlineSync.keyInSelect(gameLoopOptions, "What would you like to do? ");
     console.log(userChoice);
     //conditionals to check the user choice
     if(userChoice === 0){
        walk();
     }else if(userChoice === 1) {
         //print

     }else if(userChoice === -1) {
         console.log("No you can't do that bruh!");

     }
    


    }


   
   


    



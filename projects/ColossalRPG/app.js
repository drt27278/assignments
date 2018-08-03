

var readlineSync = require("readline-sync");

var playerName = readlineSync.question("WHAT IS YOUR NAME ADVENTURER?");
console.log("GREETINGS " + playerName + " WE NEED YOUR HELP! THE MOUNTAIN DEMONS HAVE KIDNAPPED ALL OF OUR CHILDREN, WE NEED YOUR HELP FOR THEIR SAFE RETURN");

var help = readlineSync.keyInYN("WILL YOU ASSIST?!");
    if (help === true){
        console.log("PLAYER HAS ACCEPTED THE DANGEROUS QUEST");
    }else {
        console.log("YOU'RE A WUSS, GAME OVER!");
    }

   
   


    



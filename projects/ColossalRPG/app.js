var readlineSync = require('readline-sync');

var playerName = readlineSync.question('May I have your name?');
console.log('Hi ' + playerName + ' we need your help!');

var help = readlineSync.keyInYN('READY PLAYER ONE?!');


    



var ask = require('readline-sync');

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while (option !== 'fight bears') {
  option = ask.keyInSelect(options, "What would you like to do today?: ");
  if (options[option] === 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
  }else if(options[option] ==='shoot guns'){
    console.log('you shoot guns');

  }else if(options[option] ==='fight bears'){
    option = 'fight bears';
  }else {
    console.log("Please select an option");
  }

}

console.log("You fought a bear and got beat up!");

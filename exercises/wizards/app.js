var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"];

wizards.forEach(function(wizard){
   

});

var wizards = [  
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ];
  
//   var wiz = wizards.map(function(wizard){
//       return wizard.name;
//   });
//   console.log(wiz)

// var addAlive = wizards.map(function(wizard) {
//     wizard.isAlive = false;

// });

// console.log(wizards);

// var neutralGood = wizards.filter(function(wizard){
//     if (wizard.alignment === "neutral good"){
//         return wizard;
//     }

// });

// console.log(neutralGood);

// var findLawfulGood = wizards.findIndex(function(wizard){
//     return wizard.alignment === "lawful good";
// });

// console.log(findLawfulGood);

// var alive = wizards.every(function(wizard){
//     return wizard ["is alive"] === true;
// });

// console.log(wizards);

// var neutralGood = wizards.some(function(wizard){
//     if (wizard.alignment === "neutral good"){
//         return true;
//     }
// });
// console.log(neutralGood)

// var killNeutralGood = wizards.every(function(wizard){
//     if (wizard.alignment === "neutral good"){
//         return "dead";
//     }
// })
// console.log(wizards);
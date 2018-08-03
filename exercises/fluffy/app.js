var dogs = [
    { name: 'Fluffy', isFluffy: true },
    { name: 'Fido', isFluffy: true },
    { name: 'Scooby', isFluffy: true },
    { name: 'Ralph', isFluffy: false },
  ];
//   var pooch = dogs.filter(function(doggy){
//       if(doggy.isFluffy){
//           return doggy;
//       }
//   });

//   console.log(pooch);


// function filterFluffy (arr){
//     var fluffed = arr.filter(function(dog){
//         if(dog.isFluffy) {
//             return dog;

//         }
//     });
//     return fluffed;
// }
// console.log(filterFluffy(dogs));

var dogNames = dogs.map(function(dog){
    return dog.name;
});
console.log(dogNames);
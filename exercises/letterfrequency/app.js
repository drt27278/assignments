// function solution(phrase){
    
// for(var i = 0; i < phrase.length; i++){

//     return (phrase[i]);

//     }
// }
// console.log(solution('slimy smelly solution'));


function letterFreq(phrase) {

    var freq = {};

    for (var i = 0; i < phrase.length; i++) {

        var character = phrase.charAt(i);

        if (freq[character]) {

           freq[character]++;

        } else {

           freq[character] = 1;
        }
    }

    return freq;
}

console.log(letterFreq('Slimy Smelly Solution'));
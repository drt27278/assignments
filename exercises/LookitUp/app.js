var dictionary = {};

function addEntry(word, definition) {
    dictionary[word] = definition;

}

function lookUpKey(key) {
    console.log(key + '-' + dictionary[key]);

}


addEntry('Pun', 'a play on words');

addEntry('Happy', 'A euphoric emotion');

addEntry('Oxymoron', 'contradictory term in a conjunction');

addEntry('Flabbergasted', 'greatly astonished');


console.log(dictionary);

lookUpKey('Pun');
lookUpKey('Happy');
lookUpKey('Oxymoron');
lookUpKey('Flabbergasted');

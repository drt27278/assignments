var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200);
    var data = JSON.parse(xhr.responseText);
        displayData(data);

};


xhr.open( 'GET', 'http://api.vschool.io:6543/pokemon.json', true);
xhr.send();


function parsePokemon(data){

}
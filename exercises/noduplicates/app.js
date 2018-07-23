function removeDoopies(str){
    var result = '';
    for(var i = 0; i < str.length; i++) {
        if(result.indexOf(str[i]) < 0) {
            result += str[i];
        }
    }
return result;

}
console.log(removeDoopies("bookkeeper larry"));
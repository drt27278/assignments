var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function multiples(arr) {
    var output = []
    for (var i = 0; i < arr.length; i+= 3) { 

        //what designates whether or not you use +1 or -1?
        
        output.push(i)
    }

    return output;
}




console.log(multiples());
var arr = [1, 1, 2, 2]
var sum = arr.reduce(function(final, num){
            return final += num;
}, 5)

console.log(sum)
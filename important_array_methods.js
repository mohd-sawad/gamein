var x = [1, 4, 7, 8, 10, 11, 13, 14, 21, 17, 6]
var y = x.filter(function(a) {
    if(a % 3 == 0) {
        return true
    }else {
        return false
    }

})
console.log(y);

// example - 326 power of three

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 let PowerOfThree = function(n){
    if(n<=0){
        return false;
    }
    return(math.log10(n)/math.log10(3)) % 1 == 0;
 };
 console.log(PowerOfThree(27));


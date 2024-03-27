// example - 263

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number. 

function isUgly(n) {
    if (n <= 0)
     return false; 
    
    while (n % 2 === 0) {
        n /= 2;
    }
    while (n % 3 === 0) {
        n /= 3;
    }
    while (n % 5 === 0) {
        n /= 5;
    }
    
    return n === 1; 
}
console.log(isUgly(6));

// example - 507 

// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

function isPerfectNumber(n) {
    if (n <= 1) {
        return false; 
    }

    let sum = 1; 
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i; // Add the divisor
            if (i * i !== n) {
                sum += n / i;
            }
        }
    }
    return sum === n;
}

const n = 28;
console.log(isPerfectNumber(n)); // Output: true



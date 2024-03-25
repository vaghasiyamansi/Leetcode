// example - 415 

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

let addStrings = function(num1, num2) {
    let Sum=BigInt(num1)+BigInt(num2);
    return Sum.toString();
};
console.log(addStrings(0,10));
 


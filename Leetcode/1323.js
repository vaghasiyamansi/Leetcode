// example - 1323

// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

function maximum69Number(num) {
    let numStr = num.toString();
    
    const index = numStr.lastIndexOf('6');
    
    if (index !== -1) {
        numStr = numStr.substring(0, index) + '9' + numStr.substring(index + 1);
    }
    
    return parseInt(numStr);
}

const num = 6696;
console.log(maximum69Number(num)); 
 




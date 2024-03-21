// example :- 258 

// Definition :- Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

let num = 0;

var addDigits = function(num) {
        while(num >= 10){
        let sum = 0
        while(num > 0){
            sum += num % 10
            num = Math.floor(num/10)
        }
        num = sum;
    }
    return num;
};

console.log(addDigits(90));
// example - 9


var fib = function(n) {
    let fib = [0, 1];
   for (let i = 2; i <= n; i++)
       fib.push(fib[i - 1] + fib[i - 2]);
   return fib[n];
};
console.log(fib(3));
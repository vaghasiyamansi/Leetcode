// definition :-Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order

// example - 1
// function twoSum(arr, target) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] + arr[j] === target) 
//              {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// }
// console.log(twoSum([2,7,11,15],9));




// defination:-Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 // example-7
{
    let n = 123;
    let rev = 0;
    while (n != 0) {
        rev = rev * 10 + n % 10;
        n =parseInt(n/10);
    }
    console.log(rev);
}

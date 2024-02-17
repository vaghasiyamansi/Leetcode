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

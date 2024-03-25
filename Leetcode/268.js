// example - 268 

function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    
    return expectedSum - actualSum;
}

const nums = [0 , 2 , 1, 4 ,3 ,6];
console.log(missingNumber(nums)); 

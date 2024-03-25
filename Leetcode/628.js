// example - 628 

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 function maximumProduct(nums) {

    nums.sort((a, b) => a - b);
    
    const n = nums.length;
    
    const case1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    
    const case2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(case1, case2);
}

const nums = [1, 2, 3, 4 , 5];
console.log(maximumProduct(nums)); 

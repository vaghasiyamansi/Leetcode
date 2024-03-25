// example - 344

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
}

const s = ["m", "a", "n", "s", "i"];
reverseString(s);
console.log(s); 


 


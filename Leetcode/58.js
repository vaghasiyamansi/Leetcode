// example - 58

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.


function lengthOfLastWord(s) {
    const trimmedString = s.trim();

    const words = trimmedString.split(' ');

    return words[words.length - 1].length;
}

const s = "Mansi Vaghasiya";
console.log(lengthOfLastWord(s)); 

let word1 = "RACECAR";
let word2 = "RECORDER";

function reverseString(str) {
    return str.split('').reverse().join('');
}

let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

console.log("Original word1:", word1);
console.log("Reversed word1:", reversedWord1);
console.log("Original word2:", word2);
console.log("Reversed word2:", reversedWord2);

console.log("Is word1 a palindrome?", word1 === reversedWord1); 
console.log("Is word2 a palindrome?", word2 === reversedWord2); 

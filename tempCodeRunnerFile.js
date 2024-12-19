// Declare two variables with the specified words
let word1 = "RACECAR";
let word2 = "RECORDER";

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Reverse the strings
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

// Log the original and reversed strings to the console
console.log("Original word1:", word1);
console.log("Reversed word1:", reversedWord1);
console.log("Original word2:", word2);
console.log("Reversed word2:", reversedWord2);

// Log whether the original string is equivalent to the reversed string
console.log("Is word1 a palindrome?", word1 === reversedWord1); // true if word1 is the same as reversedWord1
console.log("Is word2 a palindrome?", word2 === reversedWord2); // true if word2 is the same as reversedWord2

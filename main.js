//-----------------------


var inputText = document.getElementById("input");
var outputText = document.getElementById("output");

console.log(document.getElementById('btn'))

document.getElementById("btn").onclick = function(){
  outputText.value = pigLatin(inputText.value);
  console.log(inputText.value)
}

//transforms word
function pigLatin(word) {
word = word.toLowerCase().trim();

if (isVowel(word.charAt(0))) 
  return  word + "yay";
else if (isVowel(word.charAt(1))) 
  return word.slice(1) + word.charAt(0) + 'ay' ;
else if (isVowel(word.charAt(2))) 
  return word.slice(2) + word.slice(0, 2) +  'ay';
else if (isVowel(word.charAt(3))) 
  return word.slice(3) + word.slice(0, 3) +  'ay' ;
else 
  return "..."
}


// return word.substring(2) + word.charAt(0) + word.charAt(1) + 'ay'
//checks for vowels
function isVowel(word) {
if (
  word === "a" ||
  word === "e" ||
  word === "i" ||
  word === "o" ||
  word === "u"
)
  return true;
else return false;
}

// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
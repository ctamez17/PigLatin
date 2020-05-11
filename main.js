'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pigLatin = (inputString) => {
  // Your code here
  //step 1: transform word - get word ready for translation
  inputString = transformWord(inputString);
  
  /*step 2: check wordcount and translate each word
  let wordCount = checkMultipleWords(inputString);
  for(let i = 0; i < wordCount; i++)
  {
    translate(inputString);
  }  
  */

  //step 2: translate word
 translateWord(inputString);
}

function transformWord (inputString)
{
  //remove leading space
  if(inputString[0] == ' ')
  {
    inputString = inputString.substring(1);
  }
  //convert to lowercase
  inputString = inputString.toLowerCase();

  return inputString;
}

/*const checkMultipleWords = (inputString) =>
{
  let wordCount = 1;
  for(let i = 0; i < inputString.length; i++)
  {
    if(inputString[i] == ' ')
    {
      wordCount++;
    }
  }
  return wordCount;
}*/

const translateWord = (inputString) =>
{
   //edge case (1 vowel)
   if(inputString[0] == 'a' || inputString[0] == 'e'|| inputString[0] == 'i' || inputString[0] == 'o'|| inputString[0] == 'u')
   {
     leadingVowel(inputString);
   }
   //edge case (2 consonants)
   else if(inputString[0] != 'a' && inputString[0] != 'e' && inputString[0] != 'i' && inputString[0] != 'o' && inputString[0] != 'u' && inputString[1] != 'a' && inputString[1] != 'e' && inputString[1] != 'i' && inputString[1] != 'o' && inputString[1] != 'u' && inputString[0] != ' ')
   {
     twoConsonants(inputString);
   }
   else
   {
     //typical (1 consonant)
     typicalCase(inputString);
   }
}

const leadingVowel = (inputString) => 
{
  console.log("entering leadingVowel function...")
  console.log("Word = " + inputString)
  console.log("Full = " + inputString + "yay")
}

const twoConsonants = (inputString) => 
{
  console.log("entering twoConsonants function...")
  let firstTwoLetters = inputString[0] + inputString[1];
  let remainingWord = inputString.substring(2);
  console.log("Translation: " + remainingWord + firstTwoLetters + "ay");
}

const typicalCase = (inputString) => 
{
  let firstLetter = inputString[0];
  let remainingWord = inputString.substring(1);
  console.log("Translation: " + remainingWord + firstLetter + "ay");
}




// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('Enter word: ', (answer) => {
    console.log( pigLatin(answer) );
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
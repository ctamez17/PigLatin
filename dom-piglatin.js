
'use strict';

function pigLatin () {
  // Your code here
  console.log("Entered pigLatin function");

  let inputString = document.getElementById("word").value;

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
  let translation = translateWord(inputString);
  console.log("Translated word: " + translation);
  document.getElementById("translatedWord").innerHTML = translation;
}

function transformWord (inputString)
{
  console.log("Entered transformWord function with inputString = " + inputString);
  //remove leading space
  if(inputString[0] == ' ')
  {
    inputString = inputString.substring(1);
  }
  //remove trailing space
  if(inputString[inputString.length-1] == ' ')
  {
    inputString = inputString.substring(0, inputString.length-1);
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

function translateWord (inputString)
{
  console.log("Entered translateWord function with inputString = " + inputString);
  var translation = "";
   //edge case (1 vowel)
   if(inputString[0] == 'a' || inputString[0] == 'e'|| inputString[0] == 'i' || inputString[0] == 'o'|| inputString[0] == 'u')
   {
     translation = leadingVowel(inputString);
   }
   //edge case (2 consonants)
   else if(inputString[0] != 'a' && inputString[0] != 'e' && inputString[0] != 'i' && inputString[0] != 'o' && inputString[0] != 'u' && inputString[1] != 'a' && inputString[1] != 'e' && inputString[1] != 'i' && inputString[1] != 'o' && inputString[1] != 'u' && inputString[0] != ' ')
   {
     translation = twoConsonants(inputString);
   }
   else
   {
     //typical (1 consonant)
     translation = typicalCase(inputString);
   }
   return translation;
}

function leadingVowel (inputString)
{
  let translation = inputString + "yay";
  return translation;
}

function twoConsonants (inputString)
{
  let firstTwoLetters = inputString[0] + inputString[1];
  let remainingWord = inputString.substring(2);
  let translation = remainingWord + firstTwoLetters + "ay";
  return translation;
}

function typicalCase (inputString)
{
  let firstLetter = inputString[0];
  let remainingWord = inputString.substring(1);
  let translation = remainingWord + firstLetter + "ay";
  return translation;
}




// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C


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

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
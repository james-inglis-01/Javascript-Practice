//Find a number in an array, if true then return YES
function findNumber(arr, k) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === k) {
          return "YES";
      }
  }
  return "NO";


}


//Factorializing numbers
function factorialize(num) {
  var count = num;
  //Store a count variable for for loop here
  if(count === 0) {
    return 1;
    //Statement for the unique '0' scenario
  } else {
  
  for(var i = 1; i < count; i++) {
    num = num * i;
    //Loop to factorialize starting at 1 and moving up to the end
  }
  
  return num;
}
}

factorialize(5);


//Reversing a string

function reverseString(str) {
  var reversedStr = " ";
  //Create a variable where the reversed string will be assigned to
  reversedStr = str.split("").reverse().join("");
  //We have to split the string at each character then reverse then join each character
  return reversedStr;
}

reverseString("Greetings from Earth");


//Checking for palindromes (free code camp edition)

function palindrome(str) {
  
  str = str.toLowerCase();
  //Changed string to lowercase so no case sensitive issues
  for(var i = 0; i < str.length; i++){
    str = str.replace(' ', '');
    str = str.replace(',', '');
    str = str.replace('.', '');
    str = str.replace('/', '');
    str = str.replace('-', '');
    str = str.replace('_', '');
    str = str.replace('(', '');
    str = str.replace(')', '');
    str = str.replace(':', '');
  }
  //Loop to replace special characters without regular expressions
  var copy = str.split('').reverse().join('');
  //Create a copy of our string and reverse it
  if(copy === str) {
    return true;
  } else {
      return false;
    }
  
}

palindrome("eye");


//Finding the length of the longest word in a string

function findLongestWord(str) {
  var arrayOfStrings = str.split(' ');
  //Create an array of strings splitting at every space
  var longestStr = '';
  //Temporary placeholder for longest string
  for(var i = 0; i < arrayOfStrings.length; i++) {
    if(longestStr.length < arrayOfStrings[i].length) {
      longestStr = arrayOfStrings[i];
    }
  }
  //Iterate through the array and compare longest string with current string
  str = longestStr;
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//Title case a sentance

function titleCase(str) {
  var arrayOfStrings = str.split(' ');
  //Splits one string into an array separated by spaces
  for(var i = 0; i < arrayOfStrings.length; i++) {
    var placeholder = arrayOfStrings[i];
    //Placeholder for original string
    var upperLetter = placeholder.charAt(0).toUpperCase();
    //Selects first letter and uppercases it
    placeholder = placeholder.slice(1, placeholder.length).toLowerCase();
    //Selects 2nd letter to end of the word and lowercases it
    arrayOfStrings[i] = upperLetter.concat(placeholder);
    //Concats uppercase letter with rest of lowercase word
  }

  str = arrayOfStrings.join(' ');
  //Takes array and sets str to a single string
  return str;
}

titleCase("I'm a little tea pot");


//Confirm the ending
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

function confirmEnding(str, target) {
  var start = str.length - (target.length);
  //Var for just comparing length of string
  if(str.substr(start, str.length) == target) {
    //Compares end of string with the target string
    return true;
  } else {
    return false;
  }
  
}

confirmEnding("Bastian", "n");


//Repeat a string

function repeatStringNumTimes(str, num) {
  var emptyStr = "";
  if(num > 0) {
    return str.repeat(num);
  } else if (num <= 0) {
    return emptyStr;
  }
}

repeatStringNumTimes("abc", 3);


//Truncate a string


function truncateString(str, num) {
  if(num > 3) {
  if(str.length > num) {
    str = str.slice(0, num - 3).concat("...");
    //Slice the string 3 short of num then add ... to end of string
  }
  return str;
}
 else{
  str = str.slice(0, num).concat("...");
}
return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);

/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var count = 0;
  
  while(count < arr.length) {
    newArray.push(arr.slice(count, count + size));
    count = count + size;
  }
  
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


//Slasher flick
//Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);



//Mutation
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
*/

function mutation(arr) {
  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();
  //Lowercase both inputs for comparison purposes
  
  for(var i = 0; i < word2.length; i++) {
    /*
    Length of 2nd word is important because
    we are iterating through it's letters to see if they are in word1
    */
    var value = word1.indexOf(word2[i]);
    //Value holder for character
    if(value === -1) {
      //-1 means it's not contained in word1
      return false;
    } 
  }
  return true;
}

mutation(["hello", "hey"]);


//Return the Four Letter Strings

function isFourLetters(arr) {
	return arr.filter(fourLetterWords => fourLetterWords.length == 4);
}
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


//Checking for palindromes

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

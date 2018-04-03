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

//find a number in an array if true then return YES
function findNumber(arr, k) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === k) {
          return "YES";
      }
  }
  return "NO";


}
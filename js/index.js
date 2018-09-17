//The array to reverse
var theArray = [1, 2, 3, 4];

//function to reverse the array
function reverseArray(input) {
  var res = new Array();
  for (let i = input.length - 1; i >= 0; i--) {
    res.push(theArray[i]);
  }
  return res;
}
console.log("Reversed:");
console.log(reverseArray(theArray));

//function to reverse the array in place
function reverseArrayInPlace() {
  var n = theArray.length;
  var middle = Math.floor(n / 2);
  var temp = null;

  for (var i = 0; i < middle; i += 1) {
    temp = theArray[i];
    theArray[i] = theArray[n - 1 - i];
    theArray[n - 1 - i] = temp;
  }
}
reverseArrayInPlace(theArray);
console.log("Reversed In Place:")
console.log(theArray);
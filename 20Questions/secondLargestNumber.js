// Find the second largest number in the given array.
//input=[10,24,35,27,98]------>output=35

var arr = [10,24,35,27,98];
var temp;
for (var i = 0; i < arr.length; i++) {
  for (var j = i; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr[arr.length-2]);
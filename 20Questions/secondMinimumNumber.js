//Find the second minimum number in the given array.
//input=[9.10,22,34,54,65]---->output=10
var arr = [10, 99, 9, 22, 34, 54, 65];
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
console.log(arr[1]);
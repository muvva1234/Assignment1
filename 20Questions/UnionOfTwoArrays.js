/* Write a JavaScript Program to find the Union of Two Arrays
// Example usage:
const array1 = [1, 3, 4, 5, 8];
const array2 = [3, 5, 7, 9];
const result = findUnion(array1, array2);
console.log(result); // Output: [1, 3, 4, 5,7,8,9]

*/
const array1 = [1, 3, 4, 5, 8];
const array2 = [3, 5, 7, 9];
var m = array1.length;
var n = array2.length;
var x = 0,
  y = 0;
const result = function findIntersection(array1, array2) {
  var temp = [];
  while (x < m && y < n) {
    if (array1[x] < array2[y]) {
      temp.push(array1[x]);
      x++;
    } else if (array2[y] < array1[x]) {
      temp.push(array2[y]);
      y++;
    } else {
      temp.push(array2[y]);
      x++;
      y++;
    }
  }
  while (x < m) {
    temp.push(array1[x]);
    x++;
  }
  while (y < n) {
    temp.push(array2[y]);
    y++;
  }
  return temp;
};

console.log(result(array1, array2));

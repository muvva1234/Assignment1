/* Write a JavaScript Program to find the Intersection of two arrays
Example usage:
const array1 = [1, 3, 4, 5, 8];
const array2 = [3, 5, 7, 9];
const result = findIntersection(array1, array2);
console.log(result); // Output: [3, 5]
*/

const array1 = [1, 3, 4, 5, 8];
const array2 = [3, 5, 7, 9];
const result = function findIntersection(array1, array2) {
  var temp = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        temp.push(array1[i]);
      }
    }
  }
  return temp;
}

console.log(result(array1, array2)); // Output: [3, 5]
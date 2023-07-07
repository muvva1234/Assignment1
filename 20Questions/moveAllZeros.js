/* Q 8. Write a JavaScript Program to Move all Zero to End of the Array
// Example usage:
const numbers = [0, 5, 0, 3, 8, 0, 9];
const result = moveZerosToEnd(numbers);
console.log(result); // Output: [5, 3, 8, 9, 0, 0, 0]
*/

const numbers = [0, 5, 0, 3, 8, 0, 9];
const results = function moveZerosToEnd(numbers) {
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] != 0) {
      numbers[count++] = numbers[i];
    }
  }
  for (var i = count; i < numbers.length; i++) {
    numbers[i] = 0;
  }
  return numbers;
};

console.log(results(numbers)); // Output: [5, 3, 8, 9, 0, 0, 0]

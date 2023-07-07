//Write a javaScript program to Reverse a given number
//input=123------>output=321
var num = 123;
var rev = 0;
while (num > 0) {
  rev = 10 * rev + (num % 10);
  num = Math.floor(num / 10);
}
console.log(rev);

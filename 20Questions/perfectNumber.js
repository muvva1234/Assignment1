//Write a JavaScript Program to check whether the given number is Perfect Number or NOT.
/*
 * Perfect Number
 * ---------------
 * Perfect number is a positive integer that is
 * equal to the sum of its proper positive divisors,
 * that is, the sum of its positive divisors excluding
 * the number itself.
 *
 * Following are the examples of perfect number.
 * 6 = 1+2+3
 * 28= 1+2+4+7+14
 * 496= 1+2+4+8+16+31+62+124+248
 *
 */
var num = 6,
  sum = 0;
for (var i = 1; i < num; i++) {
  if (num % i == 0) {
    sum = sum + i;
  }
}
if (sum === num) {
  console.log("perfect Number");
} else {
  console.log("Not a Perfect Number");
}

//Write a JavaScript Program to print Perfect Numbers between 1 to 1000.
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

var num, sum = 0;
var i;
for (num = 1; num <=1000; num++) {
    for (var j = 1; j <= num - 1; j++) {   // change made here
        if (num % j == 0) {
            sum = sum + j;
        }
    }
    if (sum == num) {
        console.log(sum);
    }
    sum = 0;                              // change made here
}



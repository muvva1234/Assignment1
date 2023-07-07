/*Write a JavaScript Program to find GCD of two given numbers.
 * Find GCD of two numbers
 * GCD :: Greatest Common Divisor
 * The HCF or GCD of two numbers is the largest number
 * that can divide both numbers without reminder.
 *
 * Number a = 45 = 3 * 3 * 5
 * Number b = 75 = 3 * 5 * 5
 * GCD is = 3 * 5 = 15
 */ 

var a = 45,
  b = 75,
  GCD= 0,
  Lcm = 0;
var mul = a * b;
//product of two numbers=GCD*LCM
//we have to find GCD(Greatest Common Divisior)First
for (var i = 1; i <= a; i++) {
  if (a % i == 0 && b % i == 0) {
    GCD = i;
  }
}
console.log(GCD);


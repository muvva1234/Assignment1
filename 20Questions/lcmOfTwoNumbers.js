//Write a javaScript program to LCM of TWO given number
//input=2,6------>output=6
var a = 50,
  b = 60,
  temp = 0,
  Lcm = 0;
var mul = a * b;
//product of two numbers=GCD*LCM
//we have to find GCD(Greatest Common Divisior)First
for (var i = 1; i <= a; i++) {
  if (a % i == 0 && b % i == 0) {
    temp = i;
  }
}
Lcm = mul / temp;
console.log(Lcm);


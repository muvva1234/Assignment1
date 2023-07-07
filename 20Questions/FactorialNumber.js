// Write a JavaScript Program to find the Factorial of given number.
//input -4!  ---------->output-4.3.2.1=24

var num = 4;
var mul = 1;
for (var i = num; i >= 1; i--) {
  mul = mul * i;
}
console.log(mul);

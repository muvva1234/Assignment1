//Write a JavaScript Program to print all the Factors of any Given number.
//input=10 -------->output=1,2,5,10
var num = 10;
for (var i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}

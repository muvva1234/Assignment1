//Write a JavaScript Program to print all the Prime Factors of the Given Number.
//input=24------>output=2,2,2,3;;;;;;;;;;;;;;
var num = 10;
for (var i = 2; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
    num = Math.floor(num / i);
    i--;
  }
}


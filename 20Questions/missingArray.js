//Find the missing Number in the given array of 1 to N.
/*prerequisites:Array should not have duplicate
                Array No need to sorted Order,values should be range
*/
var arr = [1, 2, 4, 5];
//1+2+4+5=12 =SUM1
//1+2+3+4+5=15=SUM2
//SUM2-SUM1=3--->Missing Number

var sum1 = 0;
var sum2 = 0;
for (var i = 0; i < arr.length; i++) {
  sum1 = sum1 + arr[i];
}
for (var i = 1; i <= 5; i++) {
  sum2 = sum2 + i;
}
console.log("sum of the elements in array:" + sum1);
console.log("sum of the range of elements in array:" + sum2);
console.log("Missing Number in the given Array:" + (sum2 - sum1));

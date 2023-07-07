//Write a JavaScript Program to print Prime Numbers from 1 to N.
//input=10----->output=2,3,5,7,

var count=0;
var num=11;		
for(var i=1; i<=num; i++) {
    if(num%i==0)
        count++;
}
if(count==2){
    console.log("prime number");
}
else {
    console.log("not a prime number");
}
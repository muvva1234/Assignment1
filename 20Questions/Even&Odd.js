var arr=[1,24,56,7,32,24,65,7];
var a=[];
var b=[];
for(var i=0; i<arr.length;i++){
    if(arr[i]%2==0){
        a.push(arr[i]);
    }
    else{
        b.push(arr[i]);
    }
}
console.log(a)
console.log(b)
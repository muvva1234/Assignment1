/* 
Write a JavaScript Program to Print All Combinations of a given String.

const inputString = "abc";
printCombinations(inputString);
// "abc"
// "acb"
// "bac"
// "bca"
// "cab"
// "cba"
*/
const inputString = "abc";
function printCombinations(inputString){
    for(var i=inputString.length-1; i>0;i--){
        for(var j=0; j<inputString.length;j++){
            console.log(inputString.replace(inputString.charAt(i),inputString.charAt(j)));
             
        }
    }
}
printCombinations(inputString);
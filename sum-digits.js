// Create the function sumOfDigits that adds individual digits of a number, and returns the sum.

// Examples:

// INPUT: sumOfDigits(414);
// OUTPUT: 9
// INPUT: sumOfDigits(2913);
// OUTPUT: 15

function sumOfDigits(a){
    let b = String(a);  
    let count =0;
    for(var i=0; i<b.length; i++){
count += Number(b[i])        
    }
    return count;
}
console.log(sumOfDigits(414));
console.log(sumOfDigits(2913))
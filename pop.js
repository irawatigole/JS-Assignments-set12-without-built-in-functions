// Write a function called pop which accepts an array.

// The function should remove the last value in the array and return the value removed or undefined if the array is empty.

// Do not use the built in Array.pop() function!

// Examples:

// var arr = [1, 2, 3, 4];

// pop(arr); // 4

// arr; // [1, 2, 3]

// var emptyArr = [];

// pop(emptyArr); // undefined

// emptyArr.length; // 0

function pop(arr){
    if (arr.length == 0){
        return 'undefined';
    }
   return arr[arr.length-1]
}
console.log(pop([1, 2, 3, 4]));
console.log(pop([]));
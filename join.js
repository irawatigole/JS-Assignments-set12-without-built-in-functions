// Write a function called concat, which accepts an array, and a variable amount of parameters (all of which are arrays).

// The function returns a new array with all of the remaining parameters joined with the array.

// Do not use the built in Array.concat() function!

// Examples:

// concat([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

// concat([1, 2, 3], [4], [5], [6]); // [1, 2, 3, 4, 5, 6]

// concat([1], [[2], [3]], [4]); // [1, [2], [3], 4]


function merge(a,b) {
    var obj = {};
    var arr = [];
 
    for (var i = 0; i < arguments.length; i++) {
       for (var j = 0; j < arguments[i].length; j++) {   
         if (obj[arguments[i][j]] !== true) {
           arr[arr.length] = arguments[i][j];
           obj[arguments[i][j]] = true;
         }
       }
     }
    return arr;
  }
 console.log(merge([1, 2, 3], [4, 5, 6]));
 console.log(merge([1, 2, 3], [4], [5], [6]));
 console.log(merge([1], [[2], [3]], [4]));
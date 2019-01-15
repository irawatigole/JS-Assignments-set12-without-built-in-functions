// Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the last index at which the character exists or -1 if the character is not found.

// Do not use the built in String.lastIndexOf() function!

// Examples:

// stringLastIndexOf('awesome', 'e'); // 6

// stringLastIndexOf('awesome', 'z'); // -1


function stringLastIndexOf(arr,target){
    for (let i=arr.length;i>0; i--){
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(stringLastIndexOf('awesome', 'e'));
console.log(stringLastIndexOf('awesome', 'z'));



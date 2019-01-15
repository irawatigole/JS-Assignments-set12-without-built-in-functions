// Write a function called prependToString, which accepts two strings.

// The function should return a new string with the second string prepended to the first string.

// Examples:

// prependToString('awesome', 'very') // 'veryawesome'
// prependToString('world', 'hello ') // 'hello world'
// prependToString('nothing', '') // 'nothing'


function prependToString(str1,str2){
    return str2 + str1;
}
console.log(prependToString('awesome', 'very'));
console.log(prependToString('world', 'hello '));
console.log(prependToString('nothing', ''));
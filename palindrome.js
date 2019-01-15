// Title: Is it a Palindrome?
// Total Test Cases: 3

// Body:

// Have the function palindrome(str) accept a string argument, and return the boolean true if the argument is a palindrome (meaning that the string is the same forward as it is backward). Otherwise, return the boolean false.

// Examples:

// INPUT: palindrome("racecar");
// OUTPUT: true
// INPUT: palindrome("animal");
// OUTPUT: false

// View Assignment Test Cases ×
// //write Your test cases here
//  test('it should return true if the given input string is palindrome',() => { 
//    expect(palindrome('racecar')).toBe(true);
//  });
// //write Your test cases here
//  test('it should return false if the given input string is not palindrome',() => { 
//    expect(palindrome('animal')).toBe(false);
//  });
// //write Your test cases here
//  test('it should return "invalid input" if the given input string is empty',() => { 
//    expect(palindrome('')).toBe('invalid input');
//  });


function palindrome(str){
    if (str.length === 0){
        return 'invalid input'
    } else {
     return (str == str.split('').reverse().join(''))
    }
}
console.log(palindrome('racecar'));
console.log(palindrome('animal'));
console.log(palindrome(''));
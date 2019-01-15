// Title: valid shuffle of two strings
// Total Test Cases: 1

// Body:

// You are given 3 strings: first,  second, and  third.  third String is said to be a shuffle of first and second if it can be formed by interleaving the characters of first and second String in a way that maintains the left to right ordering of the characters from each string. For example, given first = "abc" and second = "def",  third = "dabecf"  is a valid shuffle since it preserves the character ordering of the two strings. So, given these 3 strings write a function that detects whether third String is a valid shuffle of first and second String

// //write Your test cases here
// test('statement',() => { 
//     expect(validShuffle('abc', 'def', 'dabecf')).toBeTruthy();
//   });
function validShuffle(str1,str2,target){
    let changedTarget = target.toLowerCase().split('').sort().join('');
   
    let sortStr1 = str1.toLowerCase().split('').sort().join('');
    let sortStr2 = str2.toLowerCase().split('').sort().join('');
    let str3 = str1 + str2;
        
    let changedStr = str3.toLowerCase().split('').sort().join('');
     
    return (changedStr === changedTarget);

}
console.log(validShuffle('Abc', 'def', 'dabecf'))
// A simple coding problem based upon String, but could also be asked with numbers. You need to write a program to check if two given strings are anagrams of Each other. Two strings are anagrams if they are written using the same exact letters, ignoring space, punctuation and capitalization. Each letter should have the same count in both strings. For example, Army and Mary are anagram of each other.
// //write Your test cases here
// test('write a program to check if two given strings are anagrams of Each other and Each letter should have the same count in both strings',() => { 
//     expect(anagramCheck("word", "wrdo")).toBeTruthy();
//   });
//  //write Your test cases here
//   test('write a program to check if two given strings are anagrams of Each other and Each letter should have the same count in both strings',() => { 
//     expect(anagramCheck("ccc", "ccccccc")).toBeFalsy();
//   });
//  //write Your test cases here
//   test('write a program to check if two given strings are anagrams of Each other and Each letter should have the same count in both strings',() => { 
//     expect(anagramCheck("boAt", "btoa")).toBeTruthy();
//   });

  function anagramCheck(str1,str2){
    if (str1.length !== str2.length) {
        return false;
    }
    
    let sortStr1 = str1.toLowerCase().split('').sort().join('');
    let sortStr2 = str2.toLowerCase().split('').sort().join('');

    return (sortStr1 === sortStr2);
}
console.log(anagramCheck("boAt", "btoa"));
console.log(anagramCheck("ccc", "ccccccc"));

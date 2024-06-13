/* Given two strings write a function to determine if the 2nd string 
is an anagram of the first. An anagram is a word, phrase, or name 
formed by rearranging the letters of another.
*/

function validAnagram(str1, str2) {
  //check length
  if (str1.length !== str2.length) return false;
  //check string
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;

  const countStr1 = {};
  //create frequency count obj for str1
  for (const char of str1) {
    //countStr1[char] = (countStr1[char] || 0) + 1;
    countStr1[char] ? countStr1[char]++ : countStr1[char] = 1;
  }

  //loop that checks if each key value pair is equal to the other
  for (const char of str2) {
    if (!countStr1[char]) {
      return false;
    }
    countStr1[char]--;
  }
  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("cat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram(123, 321)); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true



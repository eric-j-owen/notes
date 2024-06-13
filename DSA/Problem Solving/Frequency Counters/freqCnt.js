// Write a function called same
// which accepts 2 arrays.
// the functon should return
// true if every value in the array
// has its corresponding value
// squared in the second array.
// Frequency of values must be same

function same(testArr, squaredArr) {
  //check if arrays are same length
  if (testArr.length !== squaredArr.length) return false;

  const freqA = {};
  const freqB = {};
  //create freq counter for testArr array **2
  for (const int of testArr) {
    let squared = int ** 2;
    if (freqA[squared]) freqA[squared]++;
    else freqA[squared] = 1;
  }
  //create freq counter for squaredArr
  for (const int of squaredArr) {
    if (freqB[int]) freqB[int]++;
    else freqB[int] = 1;
  }
  //loop through one array and check if that object key
  // is the samefrequency
  for(const key in freqA){
    if(freqA[key] !== freqB[key]) return false;
  }
  return true;
  
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1,2,3], [1,9])) //false
console.log(same([1,2,1], [4,4,1])) //false
console.log(same([-1, -2, -3], [1, 4, 9])) // true


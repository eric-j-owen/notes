[[DSA]]

```javascript
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
```
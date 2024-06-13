/*
implement function called countUniqueValues, which 
accepts a sorted array and counts the unique value 
in the array. There can be negative numbers in the 
array, but it will always be sorted
*/
function countUniqueValues(arr) {
  // inituate count to 0
  let count = arr.length === 0 ? 0 : 1;
  //set left pointer to undex 0
  let lp = 0;
  //set a right pointer to undex 1
  let rp = 1;
  while (rp < arr.length) {
    // if lp == rp, increment rp.
    if (arr[lp] == arr[rp]) rp++;
    // else add to count, lp = rp, increment rp.
    else {
      count++;
      lp = rp;
      rp++;
    }
  }
  return count;
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

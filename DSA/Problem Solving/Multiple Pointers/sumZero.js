/*
write function sumZero which accepts a sorted array of 
integers. The function should find the first pair 
where the sum is 0. return an array that includes both 
values that sum to zero or undefined if a pair does 
not exist.
*/

function sumZero(arr) {
  //define 2 pointers
  let lp = 0;
  let rp = arr.length - 1;
  //while loop, 
  while(lp !== rp){
    //check if sum is 0
    let leftInt = arr[lp];
    let rightInt = arr[rp];
    let sum = leftInt + rightInt;
    if(sum === 0) return [leftInt, rightInt]
    //if less, increment left pointer
    else if (sum < 0) lp++;
    //if more, decrement right ptr
    else rp--;
  }
  //return undefined || []
  return;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

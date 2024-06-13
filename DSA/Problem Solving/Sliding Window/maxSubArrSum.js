/*
function maxSubArrSum, accepts an array of ints and a num called n. 
should calc the max sum of n consecutive elements in arr.
*/

function maxSumArrSum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum || null;
}

console.log(maxSumArrSum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSumArrSum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSumArrSum([4, 2, 1, 6], 1)); // 6
console.log(maxSumArrSum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSumArrSum([], 4)); // null

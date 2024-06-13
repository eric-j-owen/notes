function binary(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if(val === arr[mid]) return mid;
    if(val < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }
  return -1;
}

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));

function linear(arr, val) {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === val) return index;
    index++;
  }
  
  return -1;
}

console.log(linear([1, 2, 3, 4, 5], 6));

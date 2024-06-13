function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    for (let k = i - 1; k > -1 && arr[k] > curr; k--) {
      arr[k + 1] = arr[k];
      arr[k] = curr;
    }
  }
  return arr;
}

console.log(insertion([3, 1, 5, 4, 2]));

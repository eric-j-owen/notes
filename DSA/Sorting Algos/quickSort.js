function quickSort(arr, s, e) {
  // base case
  if (s >= e) return;

  let pivot = arr[e];
  let left = s; // pointer for left side

  // Partition: elements smaller than pivot on left side
  for (let i = s; i < e; i++) {
    if (arr[i] < pivot) {
      [arr[left], arr[i]] = [arr[i], arr[left]];
      left++;
    }
  }

  // Move pivot in-between left & right sides
  arr[e] = arr[left];
  arr[left] = pivot;

  // Quick sort left side
  quickSort(arr, s, left - 1);

  // Quick sort right side
  quickSort(arr, left + 1, e);

  return arr;
}

const arr = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(quickSort(arr, 0, arr.length - 1));

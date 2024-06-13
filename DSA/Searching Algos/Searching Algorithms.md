[[DSA]]

#### Linear Search $O(n)$
	indexOf(), includes(), find(), findIndex() are all examples of linear search. Search entire array one element at a time. 
```javascript
function linear(arr, val) {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === val) return index;
    index++;
  }
  return -1;
}
```

#### Binary Search $O(log n)$
	Only works on sorted arrays but much faster form of search. Rather than eliminating one element at a time, it eliminates half of remaining elements at a time. Divide and conquer.

```javascript
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
```
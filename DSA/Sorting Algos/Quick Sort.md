[[DSA]]

time complexity: O(n^2) is worst case if pivot is min or max element. If not min or max, O(nlogn) average case.
space complexity: O(logn)

Similar to merge in that it takes advantage of the fact that 0 or 1 element arrays are already sorted.

Works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array. elements are partitioned depending on their value compared to the pivot

pick a pivot point, move elements less than it to left, elements more than to right.

- have a helper function that is responsible for arranging elements in an array on either side of a pivot.
  - given an array, designate an element as the pivot, can be first element, middle, last or random element.
  - it should rearrange elements in array so that all values less than the pivot are moved to left, and all greater to right
  - the order of elements on either side does not matter
  - this is done in place
  - return index of pivot

#### Pivot helper steps

- accept 3 arguments, array, start and end index.
- grab the pivot from start of array
- store current pivot index in variable
- loop through array from start -> end.
  - if pivot is greater than current element, increment pivot index var and then swap current element with element at pivot.
- swap the starting element(the pivot) with the pivot index
- return pivot index

#### Quick sort steps

- call pivot helper on array.
- when helper returns the pivot index, recursively call the pivot helper on subarray to the left of that index, and the subarray to the right of that index.

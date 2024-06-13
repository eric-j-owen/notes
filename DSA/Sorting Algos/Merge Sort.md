[[DSA]]

Destructors array into smaller arrays of 0 or 1 elements, then building (merging) new sorted arrays.

time: $O(nlogn)$
space: $O(n)$
#### steps
merge
- implement helper function responsible for merging two sorted arrays
	- given two arrays that are sorted, this function should create a new array which is sorted and consists of all elements in two input arrays
	- Should run in $O(n+m)$ and should not modify the parameters passed to it. 
	- create empty array, take smallest values in each input array
	- while there are still value we haven't looked at
		- if the value in the first array is smaller than value in the second array, push the value into results array and move to next value
merge sort
- break up the array into halves until you have arrays that are empty or have one element
- merge them back with helper function
[[DSA]]

Works on lists of numbers. Never compares between elements. It uses the number of digits in a number.

time complexity = $O(nk)$
space complexity = $O(n + k)$

steps
- define function that accepts list of nums
- figure out how many digits the largest num has
- loop from k=0 up to this largest num of digits
- for each iteration
	- create buckets for each digit 0 - 9
	- place each num in corresponding bucket
- replace existing array with vals in buckets, starting with 0 up to 9
- return list 
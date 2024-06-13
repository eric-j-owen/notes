[[DSA]]

Builds up the sort by gradually creating a larger left half which is always sorted.

$O(n^2)$


- Start by picking the second element of array
- compare the second element with one before it and swap if necessary
- continue to the next element and if it is in the incorrect order,  iterate through the sorted portion to place the element in correct place
- repeat until array is sorted
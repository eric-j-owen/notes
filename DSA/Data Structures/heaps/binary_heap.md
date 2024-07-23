# binary heap

similar to a binary search tree. no relationship between siblings. filled out left to right. can be represented using arrays.

## MaxBinaryHeap

parent nodes are always larger than child nodes

- each parent has at most two child nodes
- the value of each parent node is always greater than its child nodes
- the parent is greater than the children but there are no guarantees between sibling nodes
- as compact as possible. all children of each node are as full as they can be and left children filled out first

## MinBinaryHeap

parent nodes are always smaller than child nodes

## priority queue

a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

## Big O

- insertion - o(logn)
- removal - o(logn)
- search - o(n)

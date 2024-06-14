# Tree Traversal

    Depending on the data and how the nodes are distributed, certain methods of searching will be more applicable.

## Breadth First Search

    searches horizontally, visits every node on a 'level' before progressing.

### steps

1. Create a queue and a variable to store the values of nodes visited.
2. Place the root node in the queue.
3. Loop as long as there are still nodes in the queue:
   1. Dequeue a node from the front of the queue and add its value to the visited nodes.
   2. If the dequeued node has any unvisited children, add them to the back of the queue.
4. Return the variable containing the values of the visited nodes.

## Depth First Search

    searches vertically, different ways of searching. examples are preorder, postorder, and inorder.

### steps preorder

1. create variable to store the values of nodes visited
2. write a helper function which accepts a node
   1. push the value of the node to the variable that stores the values
   2. if the node has a left property, call the helper function with the left property on the node
   3. if the node has a right property, call the helper function with the right property on the node
3. Invoke helper function with this.root
4. return data

## BFS vs DFS

- time complexity is the same
- space complixity can vary depending on the tree

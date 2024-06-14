# Tree Traversal

    Depending on the data and how the nodes are distributed, certain methods of searching will be more applicable.

## Breadth First Search

    searches horizontally, visits every node on a 'level' before progressing.

### steps

- Create a queue and a variable to store the values of nodes visited.
- Place the root node in the queue.
- Loop as long as there are still nodes in the queue:
  - Dequeue a node from the front of the queue and add its value to the visited nodes.
  - If the dequeued node has any unvisited children, add them to the back of the queue.
- Return the variable containing the values of the visited nodes.

## Depth First Search

# trees

    nonlinear data structure that consists of nodes in a parent/child relationship, branching structure

## terminology

- root
  - top node in a tree
- child
  - a node directly connected to another node when moving away from the root
- parent
  - the converse notion of a child
- siblings
  - a group of nodes with the same parent
- leaf
  - a node with no children
- edge
  - the connection between one node and another

## applications

- html dom
- network routing
- abstract syntax tree
- AI
  - decision tree
    - branching options for a game to find a winning condition
- folder structure on a computer.
- JSON

## binary search trees

    excels at searching. each node can have at most 2 children. Every node to the left of a parent node is always less than the parent. Every node to the right of a parent node is always greater than the parent.

### big o

- insertion - $O(logn)$
- searching - $O(logn)$

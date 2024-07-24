# graphs

## definitions

a collection of nodes and connections between those nodes.
vertex - a node
edge - connection between nodes
weighted - edges have values attached to them (ex. multiple routes to destination, calculating shortest path)
unweighted - edges do not have values
directed - direction is specified in terms of relationship between 2 nodes (ex.instagram followers)
undirected - direction is not specified (ex. facebook friends)

## use cases

- social networks
- location / mapping
- routing algos
- visual hierarchy
- file systems

## adjacency matrix / list

add vertex - o(1) / o(v^2)
add edge - o(1) / o(1)
remove vertex - o(v + e) / o(v^2)
remove edge - o(e) / o(1)
query - o(v + e) / o(1)
storage - o(v + e) / o(v^2)

### matrix

- takes up more space sparce graph
- slower to iterate over all edges
- faster to lookup specific edge

### list

- can take up less space sparce graph
- faster to iterate over all edges
- can be slower to lookup specific edge

## traversal

### depth first graph traversal

choose a starting node and follow each neighbors' neighbor before backtracking the other neighbors of previous nodes.

### breadth first graph traversal

visit every neightbor of a given node that are at the same "height" (distance from starting node)

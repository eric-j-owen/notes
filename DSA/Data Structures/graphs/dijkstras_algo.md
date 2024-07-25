# definiton

finds the shortest path between two vertices on a graph

# steps

1. Initialize the distance to the starting node to 0 and the distance to all other nodes to infinity.
2. Set the starting node as the current node.
3. For the current node, consider all of its unvisited neighbors and calculate their tentative distances through the current node.
4. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one. For example, if the current node A has a distance of 6, and an edge connecting it with a neighbor B is 2, then the distance to B through A will be 6 + 2 = 8. If B was previously marked with a distance greater than 8, then update it to 8.
5. Once all neighbors of the current node have been considered, mark the current node as visited. A visited node will not be checked again.
6. Select the unvisited node with the smallest tentative distance and set it as the new "current node," then go back to step 3.
7. Repeat steps 3-6 until all nodes have been visited.

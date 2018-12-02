# Graphs

## Challenge
Implement your own Graph. The graph should be represented as an adjacency list that includes the following:

1. AddEdge()
- Adds a new edge to the graph
- Bring in both the parent node and the new node to be added
- Include the ability to have a weight
2. GetNeighbors()
- Bring in a given node
- Returns a collection of nodes connected to the given node
- Include the weight to each node in the collection
3. GetNodes()
- Returns all of the nodes in the graph as a collection
4. Size()
- Returns the total number of nodes in the graph

## Approach & Efficiency
I took the approach of using the Map object to represent the adjacency list for a graph. Please see below for the Big O space/time for each of the different methods.

## API
**Graph AddVertex Method**
- This method has an arity of 1
- This method takes in as an argument the vertex to add to the graph
- This method adds a vertex to the graph
- This method does not have a return value
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Graph AddEdge Method**
- This method has an arity of 3
- This method takes in as its first argument the vertex where the edge starts
- This method takes in as its second argument the vertex where the edge ends
- This method takes in an optional third argument the weight of the edge
- This method adds an edge to the graph
- This method does not have a return value
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Graph GetNeighbors Method**
- This method has an arity of 1
- This method takes in as an argument the vertex to get the neighbors of
- This method returns the neighbors of the vertex as an array of vertices and weights
- This method has an O(1) Time Performance and an O(n) Space Complexity

**Graph GetNodes Method**
- This method has an arity of 0
- This method returns an array with all of the vertices in the graph
- This method has an O(n) Time Performance and an O(n) Space Complexity

**Graph Size Method**
- This method has an arity of 0
- This method returns the total number of vertices in the graph
- This method has an O(1) Time Performance and an O(1) Space Complexity
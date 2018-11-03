# Trees

## Challenge
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node .
- Create a BinaryTree class
    - Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which takes in a root node, and returns an array of the nodes.
- At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

- Create a BinarySearchTree class
    - Define a method named add that adds a new node in the correct location in the binary search tree.
    - Define a method named search that brings in a value of node, and returns the node with the desired value.

## Approach & Efficiency
For preOrder, inOrder, and postOrder, I used recursion to return the nodes of the tree in an array. For add, I used a while loop to iterate through to the correct location in the tree to add the node. For search, I used a while loop to iterate through to the location with the correct value and return the node at that location. 

The Big O time for preOrder, inOrder, and postOrder is O(n). The Big O space for preOrder, inOrder, and postOrder is O(n).

The Big O time for add and search is O(log n) for a balanced tree. The Big O time for add and search is O(n) for an inbalanced tree. The Big O space for add and search is O(1).

## API
**Binary Tree PreOrder Method**
- This method has an arity of 1
- This method takes in as an argument the root node of a tree
- This method pushes all the nodes of the tree into an array in root-left-right order
- This method then returns the array
- This method has an O(n) Time Performance and an O(n) Space Complexity

**Binary Tree InOrder Method**
- This method has an arity of 1
- This method takes in as an argument the root node of a tree
- This method pushes all the nodes of the tree into an array in left-root-right order
- This method then returns the array
- This method has an O(n) Time Performance and an O(n) Space Complexity

**Binary Tree PostOrder Method**
- This method has an arity of 1
- This method takes in as an argument the root node of a tree
- This method pushes all the nodes of the tree into an array in left-right-root order
- This method then returns the array
- This method has an O(n) Time Performance and an O(n) Space Complexity

**Binary Search Tree Add Method**
- This method has an arity of 1
- This method takes in as an argument a node to add to the tree
- This method traverses the tree to find the correct location to add the node
- This method does not have a return value
- This method has an O(log n) Time Performance for a balanced tree and an O(n) Time Performance for an inbalanced tree
- This method has an O(1) Space Complexity

**Binary Search Tree Search Method**
- This method has an arity of 1
- This method takes in as an argument a value to search for in the tree
- This method traverses the tree to find the node with that value
- This method then returns the node with that value
- This method has an O(log n) Time Performance for a balanced tree and an O(n) Time Performance for an inbalanced tree
- This method has an O(1) Space Complexity

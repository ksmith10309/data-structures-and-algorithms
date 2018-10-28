# Stacks and Queues

## Challenge
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
    - This object should be aware of a default empty value assigned to top when the stack is created.
    - Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
    - Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node.
    - Define a method called peek that does not take an argument and returns the node located on the top of the stack.
- Create a Queue class that has a front property and a rear property. It creates an empty queue when instantiated.
    - This object should be aware of a default empty value assigned to front when the queue is created.
    - Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
    - Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node.
    - Define a method called peek that does not take an argument and returns the node located in the front of the stack.
- At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

## Approach & Efficiency
I took the approach of using Nodes in my Stacks and Queues. The Node has a value property and a next property. The Stack has a top property. The Queue has a front property and a rear property. The Big O time and Big O space for this approach is O(1) for all of the Stack methods and all of the Queue methods.

## API
**Stack Push Method**
- This method has an arity of 1
- This method takes in an argument of any value
- This method adds a new node with the argument as its value to the top of the stack
- This method does not have a return value
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Stack Pop Method**
- This method has an arity of 0
- This method removes the node from the top of the stack
- This method has that node as its return value
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Stack Peek Method**
- This method has an arity of 0
- This method takes a peek at the node at the top of the stack
- This method has the node at the top of the stack as its return value
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Queue Enqueue Method**
- This method has an arity of 1
- This method takes in an argument of any value
- This method adds a new node with the argument as its value to the rear of the queue
- This method does not have a return value
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Queue Dequeue Method**
- This method has an arity of 0
- This method removes the node from the front of the queue
- This method has that node as its return value
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Queue Peek Method**
- This method has an arity of 0
- This method takes a peek at the node at the front of the queue
- This method has the node at the front of the queue as its return value
- This method has an O(1) Time Performance and an O(1) Space Complexity

# Singly Linked List

## Challenge
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
    - This object should be aware of a default empty value assigned to head when the linked list is instantiated.
    - Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
    - Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
    - Define a method called print which takes in no arguments and outputs all of the current Node values in the Linked List.

## API

**Insert Method**
- This method has an arity of 1
- This method takes in an argument of any value
- This method adds a new node with the argument as its value to the head of the linked list
- This method does not have a return value
- This method has an O(1) Time Performance

**Includes Method**
- This method has an arity of 1
- This method takes in an argument of any value
- This method checks if any nodes in the linked list has the argument as its value
- This method returns a boolean
- This method has an O(n) Time Performance

**Print Method**
- This method has an arity of 0
- This method returns the values of each node in the linked list in the form of a string
- This method has an O(n) Time Performance

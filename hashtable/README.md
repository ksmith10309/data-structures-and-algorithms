# Hashtables

## Challenge
Implement a Hashtable with the following capabilities:
1. A method/function named add that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
2. A method/function named find that takes in a key and returns the value from key/value pair.
3. A method/function named contains that takes in a key and returns if the key exists in the table already.
4. A method/function named getHash that takes in a key and returns the index in the array the key is stored.
5. A method/function named serialize that returns serialized Hashtable data.
6. A method/function named deserialize that returns a new Hashtable from serialized Hashtable data.

## Approach & Efficiency
I took the approach of using an array to represent a Hashtable. An array is used so that data can be quickly stored and quickly retrieved. The Big O time is O(1) for read access of an array.

## API
**Hashtable Add Method**
- This method has an arity of 2
- This method takes in a key as its first argument and a value as its second argument
- This method hashes the key and uses that value to determine the index at which the key/value should be placed
- This method does not have a return value
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Hashtable Find Method**
- This method has an arity of 1
- This method takes in a key as an argument
- This method hashes the key and uses that value to find the key and return its value
- This method has the value of the key as its return value
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Hashtable Contains Method**
- This method has an arity of 1
- This method takes in a key as an argument
- This method hashes the key and uses that value to determine if the key exists already
- This method returns whether or not the key exists
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Hashtable GetHash Method**
- This method has an arity of 1
- This method takes in a key as an argument
- This method hashes the key and returns that value
- This method has an O(1) Time Performance and an O(1) Space Complexity

**Hashtable Serialize Method**
- This method has an arity of 0
- This method serializes Hashtable data using JSON.stringify
- This method returns the serialized Hashtable data
- This method has an O(n) Time Performance and an O(n) Space Complexity

**Hashtable Deserialize Method**
- This is a static method
- This method has an arity of 1
- This method takes in serialized Hashtable data as an argument
- This method parses the serialized Hashtable data using JSON.parse
- This method creates a new Hashtable from the parsed data
- This method returns the new Hashtable
- This method has an O(n) Time Performance and an O(n) Space Complexity

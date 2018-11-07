'use strict';

const { Node, BinaryTree, findMaximumValue } = require('./find-maximum.js');

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const ten = new Node(10);
const fifteen = new Node(15);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = ten;
ten.right = fifteen;

const emptyTree = new BinaryTree();
const tree = new BinaryTree(one);
const subTree = new BinaryTree(two);

describe('Testing findMaximumValue function', () => {
  it('should return null for an empty tree', () => {
    expect(findMaximumValue(emptyTree)).toEqual(null);
  });
  it('should return 15 as maximum value', () => {
    expect(findMaximumValue(tree)).toEqual(fifteen.value);
  });
  it('should return 5 as maximum value', () => {
    expect(findMaximumValue(subTree)).toEqual(five.value);
  });
});

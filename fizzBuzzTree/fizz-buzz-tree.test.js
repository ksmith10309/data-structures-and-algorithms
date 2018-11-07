'use strict';

const { Node, BinaryTree, FizzBuzzTree } = require('./fizz-buzz-tree.js');

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

describe('Testing FizzBuzzTree function', () => {
  it('should return null for an empty tree', () => {
    expect(FizzBuzzTree(emptyTree)).toEqual(null);
  });
  it('should return a tree for a non-empty tree', () => {
    expect(FizzBuzzTree(tree)).toEqual(tree);
  });
  it('should turn three into fizz', () => {
    expect(three.value).toEqual('fizz');
  });
  it('should turn five into buzz', () => {
    expect(five.value).toEqual('buzz');
  });
  it('should turn six into fizz', () => {
    expect(six.value).toEqual('fizz');
  });
  it('should turn ten into buzz', () => {
    expect(ten.value).toEqual('buzz');
  });
  it('should turn fifteen into fizzbuzz', () => {
    expect(fifteen.value).toEqual('fizzbuzz');
  });
  it('should not change two or four', () => {
    expect(two.value).toEqual(2);
    expect(four.value).toEqual(4);
  });
});

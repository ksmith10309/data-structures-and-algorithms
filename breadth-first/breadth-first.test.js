'use strict';

const { Node, BinaryTree } = require('./breadth-first.js');

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');

A.left = B;
A.right = C;
B.left = D;
C.left = E;
C.right = F;

const emptyTree = new BinaryTree();
const tree = new BinaryTree(A);
const subTree1 = new BinaryTree(C);
const subTree2 = new BinaryTree(E);

describe('Testing BinaryTree breadthFirst method', () => {
  it('should work for an empty tree', () => {
    expect(emptyTree.breadthFirst()).toEqual(null);
  });
  it('should work for a tree with 3 levels', () => {
    expect(tree.breadthFirst()).toEqual([A.value, B.value, C.value, D.value, E.value, F.value]);
  });
  it('should work for a tree with 2 levels', () => {
    expect(subTree1.breadthFirst()).toEqual([C.value, E.value, F.value]);
  });
  it('should work for a tree with 1 level', () => {
    expect(subTree2.breadthFirst()).toEqual([E.value]);
  });
});

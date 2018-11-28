'use strict';

const { Node, BinaryTree, treeIntersection } = require('./tree-intersection.js');

const oneA = new Node('1');
const twoA = new Node('2');
const threeA = new Node('3');
const fourA = new Node('4');
const fiveA = new Node('5');
const sixA = new Node('6');

oneA.left = twoA;
oneA.right = threeA;
twoA.left = fourA;
threeA.left = fiveA;
threeA.right = sixA;

const treeA = new BinaryTree(oneA);

const oneB = new Node('1');
const threeB = new Node('3');
const fourB = new Node('4');
const sevenB = new Node('7');
const eightB = new Node('8');
const nineB = new Node('9');

oneB.left = threeB;
oneB.right = fourB;
threeB.left = sevenB;
fourB.left = eightB;
fourB.right = nineB;

const treeB = new BinaryTree(oneB);

const tenC = new Node('10');
const elevenC = new Node('11');
const twelveC = new Node('12');

tenC.left = elevenC;
tenC.right = twelveC;

const treeC = new BinaryTree(tenC);

const emptyTree = new BinaryTree();

describe('Testing treeIntersection function', () => {

  it('should return Two trees are needed if only one tree given', () => {
    expect(treeIntersection(treeA)).toBe('Two trees are needed');
  });

  it('should return Trees are empty if both trees are empty', () => {
    expect(treeIntersection(emptyTree, emptyTree)).toBe('Trees are empty');
  });

  it('should return common values between two trees', () => {
    expect(treeIntersection(treeA, treeB)).toEqual(['1', '3', '4']);
  });
  
  it('should return No common values between trees if no common values', () => {
    expect(treeIntersection(treeB, treeC)).toBe('No common values between trees');
  });

});

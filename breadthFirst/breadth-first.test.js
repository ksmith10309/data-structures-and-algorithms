'use strict';

const { Vertex, Graph } = require('./breadth-first.js');

describe('Testing Graph breadthFirst method', () => {

  const one = new Vertex(1);
  const two = new Vertex(2);
  const three = new Vertex(3);
  const four = new Vertex(4);
  const five = new Vertex(5);
  const six = new Vertex(6);

  const graph = new Graph();

  graph.addVertex(one);
  graph.addVertex(two);
  graph.addVertex(three);
  graph.addVertex(four);
  graph.addVertex(five);

  graph.addEdge(one, two);
  graph.addEdge(one, three);
  graph.addEdge(two, three);
  graph.addEdge(two, five);
  graph.addEdge(three, one);
  graph.addEdge(three, four);
  graph.addEdge(four, three);
  graph.addEdge(four, five);
  graph.addEdge(five, four);

  it('should return an array', () => {
    expect(graph.breadthFirst(one)).toBeInstanceOf(Array);
  });
  it('should return an array of one, two, three, five, four when starting with one', () => {
    expect(graph.breadthFirst(one)).toEqual([one, two, three, five, four]);
  });
  it('should return an array of five four three, one, two when starting with five', () => {
    expect(graph.breadthFirst(five)).toEqual([five, four, three, one, two]);
  });
  it('should return The input is not valid if vertex is not in the graph', () => {
    expect(graph.breadthFirst(six)).toEqual('The input is not valid');
  });
});

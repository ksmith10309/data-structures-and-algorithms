'use strict';

const { Vertex, Graph } = require('./graph.js');

describe('Testing Graph constructor', () => {

  const graph = new Graph();

  it('should create an instance of Graph', () => {
    expect(graph).toBeInstanceOf(Graph);
  });
  it('should have adjacencyList property that is an instance of Map', () => {
    expect(graph.adjacencyList).toBeInstanceOf(Map);
  });
  it('should have an empty adjacencyList when created', () => {
    expect(graph.adjacencyList.size).toEqual(0);
  });
});

describe('Testing Graph addVertex method', () => {

  const oneA = new Vertex(1);
  const twoA = new Vertex(2);
  const threeA = new Vertex(3);
  
  const graphA = new Graph();

  it('should add a vertex to the graph', () => {
    graphA.addVertex(oneA);
    expect(graphA.adjacencyList.has(oneA)).toEqual(true);
  });
  it('should add another vertex to the graph', () => {
    graphA.addVertex(twoA);
    expect(graphA.adjacencyList.size).toEqual(2);
  });
  it('should add another vertex to the graph', () => {
    graphA.addVertex(threeA);
    expect(graphA.adjacencyList.size).toEqual(3);
  });
});

describe('Testing Graph addEdge method', () => {

  const oneB = new Vertex(1);
  const twoB = new Vertex(2);
  const threeB = new Vertex(3);
  const fourB = new Vertex(4);

  const graphB = new Graph();

  graphB.addVertex(oneB);
  graphB.addVertex(twoB);
  graphB.addVertex(threeB);

  it('should add a directed edge to the graph', () => {
    graphB.addEdge(oneB, twoB);
    expect(graphB.adjacencyList.get(oneB)[0].vertex.value).toEqual(2);
  });
  it('should add another vertex to the graph', () => {
    graphB.addEdge(twoB, threeB);
    expect(graphB.adjacencyList.get(twoB)[0].vertex.value).toEqual(3);
  });
  it('should return The input is not valid if vertex is not in the graph', () => {
    expect(graphB.addEdge(threeB, fourB)).toEqual('The input is not valid');
  });
});

describe('Testing Graph getNeighbors method', () => {

  const oneC = new Vertex(1);
  const twoC = new Vertex(2);
  const threeC = new Vertex(3);
  const fourC = new Vertex(4);
  const fiveC = new Vertex(5);

  const graphC = new Graph();

  graphC.addVertex(oneC);
  graphC.addVertex(twoC);
  graphC.addVertex(threeC);
  graphC.addVertex(fourC);

  graphC.addEdge(oneC, twoC);
  graphC.addEdge(twoC, threeC);
  graphC.addEdge(threeC, fourC);
  graphC.addEdge(threeC, oneC);

  it('should get neighbors of one which should have a value of 2', () => {
    expect(graphC.getNeighbors(oneC)[0].vertex.value).toEqual(2);
  });
  it('should get neighbors of two which should have a length of 1', () => {
    expect(graphC.getNeighbors(twoC).length).toEqual(1);
  });
  it('should get neighbors of three which should have a length of 2', () => {
    expect(graphC.getNeighbors(threeC).length).toEqual(2);
  });
  it('should return The input is not valid if vertex is not in the graph', () => {
    expect(graphC.getNeighbors(fiveC)).toEqual('The input is not valid');
  });
});

describe('Testing Graph getNodes method', () => {

  const oneD = new Vertex(1);
  const twoD = new Vertex(2);
  const threeD = new Vertex(3);
  const fourD = new Vertex(4);

  const graphD = new Graph();

  graphD.addVertex(oneD);
  graphD.addVertex(twoD);
  graphD.addVertex(threeD);
  graphD.addVertex(fourD);

  it('should return the nodes in the graph as an array', () => {
    expect(graphD.getNodes()).toBeInstanceOf(Array);
  });
  it('should return all 4 nodes in the graph', () => {
    expect(graphD.getNodes().length).toEqual(4);
  });
  it('should return all 4 nodes in order', () => {
    expect(graphD.getNodes()[0].value).toEqual(1);
    expect(graphD.getNodes()[1].value).toEqual(2);
    expect(graphD.getNodes()[2].value).toEqual(3);
    expect(graphD.getNodes()[3].value).toEqual(4);
  });
});

describe('Testing Graph size method', () => {

  const oneE = new Vertex(1);
  const twoE = new Vertex(2);
  const threeE = new Vertex(3);

  const graphE = new Graph();

  it('should return the size of the graph', () => {
    graphE.addVertex(oneE);
    expect(graphE.size()).toEqual(1);
  });
  it('should return the size of the graph', () => {
    graphE.addVertex(twoE);
    expect(graphE.size()).toEqual(2);
  });
  it('should return the size of the graph', () => {
    graphE.addVertex(threeE);
    expect(graphE.size()).toEqual(3);
  });
});

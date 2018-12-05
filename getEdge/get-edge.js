'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      return 'The input is not valid';
    }
    const vertexEdges = this.adjacencyList.get(startVertex);
    vertexEdges.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return 'The input is not valid'; 
    }
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes() {
    return [...this.adjacencyList.keys()];
  }

  size() {
    return this.adjacencyList.size;
  }

}

function getEdges(graph, array) {
  if (!(graph instanceof Graph) || !Array.isArray(array) || arguments.length < 2) {
    return 'The input is not valid';
  }
  let fare = 0;
  let vertices = graph.getNodes();
  for (let i = 0; i < array.length - 1; i++) {
    let vertex = vertices.find(vertex => vertex.value === array[i]);
    let edges = graph.getNeighbors(vertex);
    for (let j = 0; i < edges.length; j++) {
      if (edges[j].vertex.value === array[i+1]) {
        fare += edges[j].weight;
        break;
      }
      if (edges[j].vertex.value !== array[i+1] && j === edges.length - 1) {
        return [false, '$0'];
      }
    }
  }
  return [true, '$' + fare];
}

module.exports = { Vertex, Graph, getEdges };

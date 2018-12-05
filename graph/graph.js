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

module.exports = { Vertex, Graph };

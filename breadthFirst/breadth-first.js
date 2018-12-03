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

  breadthFirst(startVertex) {
    if (!this.adjacencyList.has(startVertex)) {
      return 'The input is not valid';
    }
    let queue = [startVertex];
    let output = [];
    while (queue.length > 0) {
      let cur = queue.pop();
      let curNeighbors = this.getNeighbors(cur);
      for (let i = 0; i < curNeighbors.length; i++) {
        if (!output.includes(curNeighbors[i].vertex)) {
          queue.unshift(curNeighbors[i].vertex);
        }
        if (!output.includes(cur)) {
          output.push(cur);
        }
      }
    }
    return output;
  }
}

module.exports = { Vertex, Graph };

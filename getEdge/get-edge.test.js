'use strict';

const { Vertex, Graph, getEdges } = require('./get-edge.js');

describe('Testing Graph getEdges function', () => {

  const Pandora = new Vertex('Pandora');
  const Arendelle = new Vertex('Arendelle');
  const Metroville = new Vertex('Metroville');
  const Monstropolis = new Vertex('Monstropolis');
  const Narnia = new Vertex('Narnia');
  const Naboo = new Vertex('Naboo');

  const graph = new Graph();

  graph.addVertex(Pandora);
  graph.addVertex(Arendelle);
  graph.addVertex(Metroville);
  graph.addVertex(Monstropolis);
  graph.addVertex(Narnia);
  graph.addVertex(Naboo);

  graph.addEdge(Pandora, Arendelle, 150);
  graph.addEdge(Pandora, Metroville, 82);

  graph.addEdge(Arendelle, Pandora, 150);
  graph.addEdge(Arendelle, Metroville, 99);
  graph.addEdge(Arendelle, Monstropolis, 42);

  graph.addEdge(Metroville, Pandora, 82);
  graph.addEdge(Metroville, Arendelle, 99);
  graph.addEdge(Metroville, Monstropolis, 105);
  graph.addEdge(Metroville, Narnia, 37);
  graph.addEdge(Metroville, Naboo, 26);

  graph.addEdge(Monstropolis, Arendelle, 42);
  graph.addEdge(Monstropolis, Metroville, 105);
  graph.addEdge(Monstropolis, Naboo, 73);

  graph.addEdge(Narnia, Metroville, 37);
  graph.addEdge(Narnia, Naboo, 250);

  graph.addEdge(Naboo, Metroville, 26);
  graph.addEdge(Naboo, Monstropolis, 73);
  graph.addEdge(Naboo, Narnia, 250);

  let array1 = ['Metroville', 'Pandora'];
  let array2 = ['Arendelle', 'Monstropolis', 'Naboo'];
  let array3 = ['Naboo', 'Pandora'];
  let array4 = ['Narnia', 'Arendelle', 'Naboo'];

  it('should return [true, $82] for [Metroville, Pandora]', () => {
    expect(getEdges(graph, array1)).toEqual([true, '$82']);
  });
  it('should return [true, $115] for [Arendelle, Monstropolis, Naboo]', () => {
    expect(getEdges(graph, array2)).toEqual([true, '$115']);
  });
  it('should return [false, $0] for [Naboo, Pandora]', () => {
    expect(getEdges(graph, array3)).toEqual([false, '$0']);
  });
  it('should return [false, $0] for [Narnia, Arendelle, Naboo]', () => {
    expect(getEdges(graph, array4)).toEqual([false, '$0']);
  });
  it('should return The input is not valid if first argument is not an instance of Graph', () => {
    expect(getEdges(array1, array1)).toBe('The input is not valid');
  });
  it('should return The input is not valid if second argument is not an array', () => {
    expect(getEdges(graph, graph)).toBe('The input is not valid');
  });
  it('should return The input is not valid if fewer than 2 arguments received', () => {
    expect(getEdges(graph)).toBe('The input is not valid');
  });
});

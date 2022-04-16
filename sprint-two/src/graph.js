

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
//
//Time complexity: Constant
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
};


// Time complexity: Constant
Graph.prototype.contains = function(node) {
  return node in this.storage;
};


// Time complexity: Constant
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
// second find connections and delete
};


// Time complexity: Constant
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode] !== undefined &&
    this.storage[toNode] !== undefined &&
    toNode in this.storage[fromNode] &&
    fromNode in this.storage[toNode];
};

// Time complexity: Constant
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = toNode;
  this.storage[toNode][fromNode] = fromNode;
};

// Time complexity: Constant
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Time complexity: Linear
Graph.prototype.forEachNode = function(cb) {
  for (var keys in this.storage) {
    cb(keys);
  }
};


// Graph{
//   { 1 :  [3, 5] },                       // <-- Key = node , value = array with connections
//   { 2 :  [ 4 ] },
//   { 3 :  [ 6 ] },
//   ...
// }

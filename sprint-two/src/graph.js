var Graph = function(){
  this.nodes = {};
  //vertices are values
  // edges are relationships
};

Graph.prototype.addNode = function(newNode, toNode){
  var vertices = {};
  this.nodes[newNode] = vertices;
  var nodes = Object.keys(this.nodes);
  if(nodes.length === 2){
    vertices0 = this.nodes[nodes[0]];
    vertices0[nodes[1]] = true;
    vertices1= this.nodes[nodes[1]];
    vertices1[nodes[0]] = true;
  } else if(toNode !== undefined && this.nodes[toNode] !== undefined){
    vertices[toNode] = true;
    this.nodes[toNode][newNode] = true;
  }
};

Graph.prototype.contains = function(node){
  return this.nodes[node] !== undefined;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
  Object.keys(this).forEach(function(gNode){
    delete gNode[node];
  });
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var result = this.nodes[fromNode][toNode] || false;
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
    this.nodes[fromNode][toNode] = true;
    this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
    delete this.nodes[fromNode][toNode];
    delete this.nodes[toNode][fromNode];
    var to = this.nodes[toNode];
    var from = this.nodes[fromNode];
    if(Object.keys(to).length === 0){
      this.removeNode(toNode);
    }
    if(Object.keys(from).length === 0){
      this.removeNode(fromNode);
    }
};

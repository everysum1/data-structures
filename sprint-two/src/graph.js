var Graph = function(){
  this.nodes ={};
};

Graph.prototype.addNode = function(newNode, toNode){
  if(Object.keys(this).length === 1){
    var firstNode = Object.keys(this)[0];
    this.nodes[newNode] = [firstNode];
    this.nodes[firstNode].push(newNode);
  }
  else{
    this.nodes[newNode] = toNode === undefined ? [] : [toNode];
  }
};

Graph.prototype.contains = function(node){
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};
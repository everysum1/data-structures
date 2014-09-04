var makeMinHeap = function(){
  var heap = {};
  heap.storage = [null];
  heap.size = 0;
  
  heap.insert = function(val){
    var index = this.storage.push(val) - 1;
    this.size++;
    bubble(index);
  };

  heap.delete = function(){
    var min;
    if(this.size === 1){
      this.size--;
      min = this.storage.pop();
      return min;
    } else if (this.size === 0){
      return null;
    }
    this.size--;
    min = this.storage[1];
    this.storage[1] = this.storage.pop();
    sink(1);
    return min;
  };

  heap.getRoot = function(){
    return this.storage[1];
  };

  var bubble = function(index){
    var parent = Math.floor(index/2);
    if(parent > 0 && heap.storage[parent].value > heap.storage[index].value){
      swap(index, parent);
      bubble(parent);
    }
  };

  var sink = function(index){
    var child1 = 2*index;
    var child2 = 2*index+1;
    var minChild;

    if(heap.storage[child1] !== undefined){
      if(heap.storage[child2] === undefined){
        minChild = child1;
      } else if (heap.storage[child2] !== undefined){
        minChild = heap.storage[child1] < heap.storage[child2] ? child1 : child2;
      }
      if(heap.storage[index].value < heap.storage[minChild].value){
        swap(index, minChild);
        sink(minChild);
      }
    }
  };

  var swap = function(ind1, ind2){
    heap.storage[0] = heap.storage[ind1];
    heap.storage[ind1] = heap.storage[ind2];
    heap.storage[ind2] = heap.storage[0];
    heap.storage[0] = null;
  };

  return heap;
};

var djikstra = function(graph, begin, end){
  var sourceNode = graph[begin];
  sourceNode._dist = 0;
  var heap = findClosestVertex(graph, sourceNode);
  var nextNode = heap.delete();
  var subHeap;
  var root;
  var path = [];
  var max = 0;
  while(nextNode.value !== graph[end].value && max < 20){
    subHeap = findClosestVertex(graph, nextNode);
    while(subHeap.getRoot() !== undefined){
      root = subHeap.delete();
      heap.insert(root);
    }
    nextNode = heap.delete();
    max++;
    console.log(max);
  }
  while(nextNode._priorPath !== undefined){
    path.push(nextNode);
    nextNode = nextNode._priorPath;
  }
  var temp;
  var length = path.length;
  for(var i = 0; i < Math.floor(length/2); i++){
    temp = path[i];
    path[i] = path[length - 1 - i];
    path[length - 1 - i] = temp;
  }
  return path;
};

var findClosestVertex = function(graph, node){
  var heap = makeMinHeap();
  var otherNode;
  for(var key in node.edges){
    otherNode = graph[key];
    var newDist = node._dist + node.edges[key];
    if( !otherNode._dist || newDist < otherNode._dist){
      otherNode._dist = newDist;
      otherNode._priorPath = node;
    }
    graph.removeEdge(key, node.value);
    heap.insert(otherNode);
  }
  return heap;
};

var Graph = function(){
};

Graph.prototype.makeNode = function(val){
  var edges = {};
  var node = {};
  this[val] = node;
  node.edges = edges;
  node.value = val;
};

Graph.prototype.insertNode = function(val, nextVal, distance){
  this.makeNode(val);
  this.addEdge(val, nextVal, distance);
};

Graph.prototype.addEdge = function(val, nextVal, distance){
  if(this[val] && this[nextVal]){
    this[nextVal].edges[val] = distance;
    this[val].edges[nextVal] = distance;
  }
};

Graph.prototype.getEdge = function(val, nextVal){
  if(this[val] && this[nextVal]){
    return this[val].edges[nextVal];
  }
  return null;
};

Graph.prototype.removeEdge = function(val, nextVal){
  if(this[val] && this[nextVal]){
    delete this[val].edges[nextVal];
    delete this[nextVal].edges[val];
  }
};

Graph.prototype.removeNode = function(val){
  var edges = this[val].edges;
  for(var node in edges){
    delete this[node].edges[val];
  }
  delete this[val];
};

Graph.prototype.contains = function(val){
  return this[val] !== undefined;
};


var graph = new Graph();

graph.insertNode(5);
graph.insertNode(6,5,3);
graph.insertNode(7,5,2);
graph.insertNode(8,7,1);
graph.insertNode(9,5,5);
graph.addEdge(6,8,4);
graph.addEdge(8,9,1);

var path = djikstra(graph, 5, 9);
console.log(path);
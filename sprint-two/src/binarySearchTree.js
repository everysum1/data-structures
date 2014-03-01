var makeBinarySearchTree = function(value){

  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;
  return newTree;
};


var treeMethods = {};

treeMethods.insert = function(value){
  var child = makeBinarySearchTree(value);
  if (child.value < this.value){
    if(this.left === undefined){
      this.left = child;
    }
    else{
      this.left.insert(value);
    }
  }
  else if(child.value > this.value){
    if(this.right === undefined){
      this.right = child;
    }
    else{
      this.right.insert(value);
    }
  }
};

treeMethods.contains = function(target){
  if(this.value === target) {
    return true;
  }
  if(this.left !== undefined && this.left.contains(target)) {
    return true;
  }
  if(this.right !== undefined && this.right.contains(target)) {
    return true;
  }
  return false;
};

treeMethods.depthFirstLog = function(callback) {
  if(this.left !== undefined) {
     this.left.depthFirstLog(callback);
  }
  if(this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }
   callback(this);
};
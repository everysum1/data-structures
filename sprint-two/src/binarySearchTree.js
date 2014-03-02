var makeBinarySearchTree = function(value){

  var newTree = Object.create(binaryTreeMethods);
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;
  return newTree;
};


var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
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

binaryTreeMethods.contains = function(target){
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

binaryTreeMethods.depthFirstLog = function(callback) {
  if(this.left !== undefined) {
     this.left.depthFirstLog(callback);
  }
  if(this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }
   callback(this);
};

binaryTreeMethods.breadthFirstLog = function(callback) {
  var currentLevel = [this];
  var children = [];
  var traverse = function() {
    for(var i = 0; i < currentLevel.length; ++i) {
      callback(currentLevel[i]);
      if(currentLevel[i].left !== undefined) {
        children.push(currentLevel[i].left);
      }
      if(currentLevel[i].right !== undefined) {
        children.push(currentLevel[i].right);
      }
    }
    currentLevel = children;
    children = [];
    if(currentLevel.length !== 0) {
      traverse();
    }
  };
  traverse();
};

binaryTreeMethods.rebalance = function() {
  var levels = [];
  var min = 0;
  var max = 0;
  var getLeaves = function() {
    var currentLevel = [this];
    var leaves = [];
    var children = [];
    var traverse = function() {
      for(var i = 0; i < currentLevel.length; ++i) {
        if(currentLevel[i].left !== undefined) {
          children.push(currentLevel[i].left);
        }
        if(currentLevel[i].right !== undefined) {
          children.push(currentLevel[i].right);
        }
        if(currentLevel[i].left === undefined && currentLevel[i].right === undefined) {
          leaves.push(currentLevel[i]);
        }
      }
      levels.push(leaves);
      currentLevel = children;
      children = [];
      if(currentLevel.length !== 0) {
        traverse();
      }
    };
    traverse();
  };
  getLeaves();
  for(var i = 0; i < levels.length; ++i) {
    if(levels[i].length > 0 && i < min) {
      min = i;
    }
    if(levels[i].length > 0 && i > max) {
      max = i;
    }
  }

  if(max/2 > min){
    var treeValues = [];
    this.depthFirstLog(function(item){
      treeValues.push(item.value);
    });

    treeValues.sort();
    var balancedTree = makeBinarySearchTree( Math.floor((treeValues.length/2)) );

    while(treeValues.length>0){
      balancedTree.insert( Math.floor((treeValues.length/2)) );
    }

    this = balancedTree;
  }

};
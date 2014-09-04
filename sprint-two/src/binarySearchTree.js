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

  var leafRange = this.balanceCheck();
  if (leafRange[1]/2 > leafRange[0] || leafRange[0]/2 > leafRange[1]){
    rebalance(this);
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
  callback(this.value);
  if(this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }
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

rebalance = function(tree) {
  var treeValues = [];

  tree.depthFirstLog(function(item){
    treeValues.push(item.value);
  });
  tree = makeBinarySearchTree( Math.floor((treeValues.length/2)) );
  treeValues.splice(treeValues.length/2, 1);
  var scale = function(nodes){
    tree.insert( Math.floor((nodes.length/2)) );
    if (nodes.length === 0){
      return;
    }
    var bottomNodes = nodes.slice(0, nodes.length/2);
    scale(bottomNodes);
    var topNodes = nodes.slice(nodes.length/2);
    scale(topNodes);
  };
  return tree;
  
};

binaryTreeMethods.balanceCheck = function() {
  var left = 0;
  var right = 0;
  if(this.left !== undefined){
    this.left.depthFirstLog(function(){
      left++;
    });
  }
  if(this.right !== undefined){
    this.right.depthFirstLog(function(){
      right++;
    });
  }
  return [left, right];
};


var BinarySearchTree = function(val){
  this.left   = null;
  this.right  = null;
  this.value = val;
};

BinarySearchTree.prototype.insert = function(val, notRoot){
  notRoot = notRoot || false;
  if(val < this.value){
    if(this.left){
      this.left.insert(val);
    } else{
      this.left = new BinarySearchTree(val, true);
    }
  } else if (val > this.value){
    if(this.right){
      this.right.insert(val, true);
    } else {
      this.right = new BinarySearchTree(val);
    }
  }
  if(!notRoot){
    if(!_balanceCheck(this)){
      _rebalance(this);
    }
  }
};

BinarySearchTree.prototype.contains = function(val){
  if(val === this.value){
    return true;
  } else if (val < this.value){
    if(!this.left){
      return false;
    } else{
      return this.left.contains(val);
    }
  } else if (val > this.value){
    if(!this.right){
      return false;
    } else{
      return this.right.contains(val);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
  callback(this.value);
};

BinarySearchTree.prototype.breadthFirstLog = function(callback){
  callback(this);
  var treecursion = function(level){
    var node;
    var nextLevel = [];
    for(var i = 0; i < level.length; i++){
      node = level[i];
      if(node.left){
        callback(node.left);
        nextLevel.push(node.left);
      }
      if(node.right){
        callback(node.right);
        nextLevel.push(node.right);
      }
    }
    if(nextLevel.length > 0){
      treecursion(nextLevel);
    }
  };
  treecursion([this]);
};

_balanceCheck = function(node, notRoot){
  // left and right subtree differ in height by 1
  // left tree is balanced
  // right tree is balanced
  notRoot = notRoot || false;
  var left;
  var right;
  if(node.left){
    left = _balanceCheck(node.left, true);
    if(left === false){
      return false;
    }
    left += 1;
  } else{
    left = 0;
  }
  if(node.right){
    right = _balanceCheck(node.right, true);
    if(right === false){
      return false;
    }
    right += 1;
  } else{
    right = 0;
  }
  if (Math.abs(right-left) > 1){
    return false;
  }

  if(notRoot){
    if(left > right){
      return left;
    } else{
      return right;
    }
  } else{
    return true;
  }
};

var _rebalance = function(node){
  var orderedList = [];
  _orderList(node, orderedList);
  var insertPlan  = _binaryOut(orderedList);
  node.value = insertPlan[0];
  for(var i = 1; i < insertPlan.length; i++){
    node.insert(insertPlan[i]);
  }
};

var _orderList = function(node, list){
  if(node.left){
    _orderList(node.left, list);
    node.left = null;
  }
  list.push(node.value);
  if(node.right){
    _orderList(node.right, list);
    node.right = null;
  }
};

var _binaryOut = function(list){
  var binaryList = [];
  // be the node, not the tree
  if(list.length === 0){
    return [];
  }
  var mid = Math.floor(list.length/2);
  var lowArr  = _binaryOut(list.slice(0,mid));
  var highArr = _binaryOut(list.slice(mid+1));
  binaryList.push(list[mid]);
  while(lowArr.length > 0 || highArr.length > 0){
    if(lowArr.length>0){
      binaryList.push(lowArr.shift());
    }
    if(highArr.length>0){
      binaryList.push(highArr.shift());
    }
  }
  return binaryList;
};

// tree = new BinarySearchTree(6);
// tree.insert(3);
// tree.insert(7);
// tree.insert(2);
// tree.insert(8);
// tree.insert(4);
// tree.insert(6.5);
// console.log(tree);
// tree.insert(1);
// tree.insert(0);
// console.log(tree);

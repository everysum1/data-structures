var makeBinarySearchTree = function(value){

  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;
  newTree.root = true;
  return newTree;
};


var treeMethods = {};

treeMethods.insert = function(value){
  var child = makeBinarySearchTree(value);
  child.root = false;
  if(this.root === true) {
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
  }
};

treeMethods.removeFromParent = function(){
  for(var i = 0; i < this.parent.children.length; ++i) {
    if(this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
      break;
    }
  }
  if(this.parent.children.length === 0) {
    this.parent.children = undefined;
  }
  this.parent = undefined;
};

treeMethods.contains = function(target){
  if(this.value === target) {
    return true;
  }
  if(this.children !== undefined){
    for(var i = 0; i < this.children.length; ++i) {
      if(this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};
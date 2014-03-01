var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = undefined;
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
  if(this.children === undefined) {
    this.children = [child];
  }
  else {
    this.children.push(child);
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

treeMethods.traverse = function(callback) {
  callback(this);
  if(this.children !== undefined){
    for(var i = 0; i < this.children.length; ++i) {
      this.children[i].traverse(callback);
    }
  }
};
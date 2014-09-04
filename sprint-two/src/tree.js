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

var Tree = function(value){
  this.value = value;
  this.children = [];
  this.parent = undefined;
};

Tree.prototype.addChild = function(value){
  var node = new Tree(value);
  node.parent = this;
  this.children.push(node);
};

Tree.prototype.removeFromParent = function(){
  if(this.parent !== null){
    var parent = this.parent;
    for(var i = 0; i < parent.children.length; i++){
      var child = parent.children[i];
      if(this.value === child.value){
        parent.children.splice(i,1);
        break;
      }
    }
    this.parent = undefined;
  }
};

Tree.prototype.contains = function(target){
  if(this.value === target){
    return true;
  }
  var child;
  var state = false;
  for(var i = 0; i < this.children.length; i++){
    child = this.children[i];
    state = state || child.contains(target);
  }
  return state;
};

Tree.prototype.traverse = function(callback){
  callback(this);
  for(var i = 0; i < this.children.length; i++){
    var child = this.children[i];
    child.traverse(callback);
  }
};

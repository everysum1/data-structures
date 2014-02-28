var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === undefined) {
    this.children = [makeTree(value)];
  }
  else {
    this.children.push(makeTree(value));
  }
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


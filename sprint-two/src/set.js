var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(this._storage === undefined){
    this._storage = [];
  }
  if(!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  if(this._storage === undefined){
    return false;
  }
  for(var i = 0; i < this._storage.length; i++) {
    if(this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  var index = this._storage.indexOf(item);
  if(index >= 0){
    this._storage.splice(index,1);
  }
  if(this._storage.length === 0){
    this._storage = undefined;
  }
};

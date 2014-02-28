var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(this._storage === undefined){
    this._storage = {};
  }
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  if(this._storage === undefined){
    return false;
  }
  return this._storage[item] !== undefined;
};

setPrototype.remove = function(item){
  if(this.contains(item)){
    delete this._storage[item];
  }
  if(Object.keys(this._storage).length === 0){
    this._storage = undefined;
  }
};

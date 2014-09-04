var HashTable = function(){
  this._limit = 8;
  this._valueCount = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var keychain = [];

  this._storage.set(index, [key, value]);
  this._valueCount++;
  this._storage.each(function(item){
    if(item !== undefined && item !== null){
      keychain.push(item);
    }
  });
  if(this._valueCount >= this._limit*0.75){
    this._limit = this._limit * 2;
    this._storage = makeLimitedArray(this._limit);
    this._valueCount = 0;
    for(var i = 0; i < keychain.length; i++) {
      var newIndex = getIndexBelowMaxForKey(keychain[i][0], this._limit);
      this._storage.set(newIndex, keychain[i]);
      this._valueCount++;
    }
  }
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(index) === null || this._storage.get(index) === undefined ? null : this._storage.get(index)[1];
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var keychain = [];
  this._storage.each(function(val, ki, stor) {
    if(index === ki) {
      stor[ki] = null;
      --this._valueCount;
    }
  });
  this._storage.each(function(item){
    if(item !== undefined && item !== null){
      keychain.push(item);
    }
  });
  if(keychain.length < this._limit*0.25){
    this._limit = this._limit / 2;
    this._storage = makeLimitedArray(this._limit);
    this._valueCount = 0;
    for(var i = 0; i < keychain.length; i++) {
      var newIndex = getIndexBelowMaxForKey(keychain[i][0], this._limit);
      this._storage.set(newIndex, keychain[i]);
      this._valueCount++;
    }
  }
};

var makeHashTable = function(){
  var hash = {};
  var storage = [];
  hash._limit  = 4;
  var size = 0;
  
  hash.insert = function(key, value){
    var index = _getIndexBelowMaxForKey(key, hash._limit);
    var name;
    storage[index] = storage[index] || [];
    for(var i = 0; i < storage[index].length; i++){
      name = storage[index][i][0];
      if(name === key){
        return;
      }
    }
    storage[index].push([key, value]);
    size++;
    if(size > 3/4*hash._limit){
      _resize(2*hash._limit);
    }
  };

  hash.retrieve = function(key){
    var index = _getIndexBelowMaxForKey(key, hash._limit);
    var block = storage[index] || [];
    var cell;
    for(var i = 0; i < block.length; i++){
      cell = block[i];
      if(cell[0] === key){
        return cell[1];
      }
    }
    return null;
  };

  hash.remove = function(key){
    var index = _getIndexBelowMaxForKey(key, hash._limit);
    var cell;
    for(var i = 0; i < storage[index].length; i++){
      cell = storage[index][i];
      if(cell[0] === key){
        var pair = storage[index].splice(i,1);
        size--;
        if(size < 1/4*hash._limit){
          _resize(1/2*hash._limit);
        }
        return pair;
      }
    }

  };

  var _resize = function(max){
    var newStorage = [];
    var block;
    var cell;
    var index;
    for(var i = 0; i < storage.length; i++){
      block = storage[i] || [];
      for(var j = 0; j < block.length; j++){
        cell = block[j];
        index = _getIndexBelowMaxForKey(cell[0], max);
        newStorage[index] = newStorage[index] || [];
        newStorage[index].push(cell);
      }
    }
    hash._limit = max;
    storage = newStorage;
  };

  var _getIndexBelowMaxForKey = function(str, max){
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };

  return hash;
};

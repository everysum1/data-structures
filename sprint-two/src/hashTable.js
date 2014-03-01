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


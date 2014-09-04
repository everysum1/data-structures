var makeStackOld = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    if(size > 0){
      var item = storage[size-1];
      delete storage[size-1];
      size--;
      return item;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

var makeStack = function(){
  var stack = {};
  var storage = [];

  stack.push = function(val){
    storage.push(val);
    return storage.length;
  };

  stack.pop = function(){
    return storage.pop();
  };

  stack.size = function(){
    return storage.length;
  };

  return stack;
};
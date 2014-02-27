var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  instance.enqueue = function(value){
    storage[size++] = value;
  };

  instance.dequeue = function(){
    if (size > 0){
      var item = storage[0];
      for(var num = 1; num < size; num ++){
        storage[num-1] = storage[num];
      }
      delete storage[size - 1];
      size--;
      return item;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
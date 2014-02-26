var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  var size = 0;
  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    if (size >= 0){
      var item = storage[0];
      for(var num = 1; num < size-1; num ++){
        storage[num-1] = storage[num];
      }
      delete storage[size - 1];
      if(size > 0){
        size--;
      }
      return item;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

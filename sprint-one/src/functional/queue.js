var makeQueueOld = function(){
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

var makeQueue = function(){
  var queue = {};
  var storage = [];
  
  queue.enqueue = function(val){
    storage.unshift(val);
    return storage.length;
  };

  queue.dequeue = function(){
    return storage.pop();
  };

  queue.size = function(){
    return storage.length;
  };

  return queue;
};

var queue = makeQueue();

queue.enqueue('cool');
queue.enqueue('rad');
console.log(queue.dequeue());
console.log(queue.size());
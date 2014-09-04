var makeQueueOld = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = { };

  // Use an object with numeric keys to store values
  instance.length = 0;
  instance.storage = {};
  _.extend(instance, queueMethodsOld);

  // Implement the methods below
  return instance;
};

var queueMethodsOld = {

  enqueue: function(value){

    this.storage[this.length++] = value;

  },
  dequeue: function(){
    if(this.length > 0) {
      var item = this.storage[0];
      for(var num = 1; num < this.length; num++) {
        this.storage[num-1] = this.storage[num];
      }
      delete this.storage[this.length-1];
      this.length--;

      return item;
    }
  },
  size: function(){
    return this.length;
  }

};

var makeQueue = function(){
  var queue = {};
  queue.storage = [];
  _extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  'enqueue': function(val){
    this.storage.unshift(val);
    return this.storage.length;
  },
  
  'dequeue': function(){
    return this.storage.pop();
  },

  'size': function(){
    return this.storage.length;
  }
};

_extend = function(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
};

var queue = makeQueue();

console.log(queue.enqueue('cool'));
queue.enqueue('rad');
console.log(queue.dequeue());
console.log(queue.size());

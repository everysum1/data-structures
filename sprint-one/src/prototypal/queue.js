var makeQueueOld = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethodsOld);

  // Use an object with numeric keys to store values
  instance.length = 0;
  instance.storage = {};

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
  var queue = Object.create(queueMethdos);
  queue.storage = [];
  return queue;
};

var queueMethdos = {
  'enqueue': function(val){
    return this.storage.unshift(val);
  },
  'dequeue': function(){
    return this.storage.pop();
  },
  'size': function(){
    return this.storage.length;
  }
};

var queue = makeQueue();

queue.enqueue('cool');
queue.enqueue('rad');
console.log(queue.dequeue());
console.log(queue.size());


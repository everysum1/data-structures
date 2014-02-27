var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = { };

  // Use an object with numeric keys to store values
  instance.length = 0;
  instance.storage = {};
  _.extend(instance, queueMethods);

  // Implement the methods below
  return instance;
};

var queueMethods = {

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
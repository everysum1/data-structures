var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.storage = {};
  this.length = 0;

};

Queue.prototype.enqueue = function(value){
  this.storage[this.length++] = value;
};

Queue.prototype.dequeue = function(){
  if(this.length > 0) {
    var item = this.storage[0];
    for(var num = 1; num < this.length; num++) {
      this.storage[num-1] = this.storage[num];
    }
    delete this.storage[this.length-1];
    this.length--;
    return item;
  }
};

Queue.prototype.size = function(){
  return this.length;
};

var newQueue = new Queue();

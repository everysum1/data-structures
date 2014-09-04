var QueueOld = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.storage = {};
  this.length = 0;

};

QueueOld.prototype.enqueue = function(value){
  this.storage[this.length++] = value;
};

QueueOld.prototype.dequeue = function(){
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

QueueOld.prototype.size = function(){
  return this.length;
};

var Queue = function(){
  this.storage = [];
};

Queue.prototype.enqueue = function(val){
  return this.storage.unshift(val);
};

Queue.prototype.dequeue = function(){
  return this.storage.pop();
};

Queue.prototype.size = function(){
  return this.storage.length;
};

var queue = new Queue();

console.log(queue.enqueue('cool'));
queue.enqueue('rad');
console.log(queue.dequeue());
console.log(queue.size());

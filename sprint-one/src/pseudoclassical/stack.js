var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.length = 0;

};

Stack.prototype.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function(){
  if(this.length > 0){
    var item = this.storage[this.length-1];
    delete this.storage[this.length-1];
    this.length--;
    return item;
  }
};

Stack.prototype.size = function(){
  return this.length;
};

var newStack = new Stack();


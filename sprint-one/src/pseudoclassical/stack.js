var StackOld = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.length = 0;

};

StackOld.prototype.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

StackOld.prototype.pop = function(){
  if(this.length > 0){
    var item = this.storage[this.length-1];
    delete this.storage[this.length-1];
    this.length--;
    return item;
  }
};

StackOld.prototype.size = function(){
  return this.length;
};

var Stack = function(){
  this.storage = [];
};

Stack.prototype.push = function(val){
  return this.storage.push(val);
};

Stack.prototype.pop = function(){
  return this.storage.pop();
};

Stack.prototype.size = function(){
  return this.storage.length;
};

var stack = new Stack();
console.log(stack.push('cool'));
stack.push('rad');
console.log(stack.size());
console.log(stack.pop());

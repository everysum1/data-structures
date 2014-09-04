var makeStackOld = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethodsOld);

  instance.length = 0;
  instance.storage = {};

  return instance;

};

var stackMethodsOld = {

  push : function(value){
    this.storage[this.length] = value;
    this.length++;
  },

  pop : function(){
    if(this.length > 0){
      var item = this.storage[this.length-1];
      delete this.storage[this.length-1];
      this.length--;
      return item;
    }
  },

  size : function(){
    return this.length;
  }
};

var makeStack = function(){
  var stack = Object.create(stackMethods);
  stack.storage = [];
  return stack;
};

var stackMethods = {
  'push': function(val){
    return this.storage.push(val);
  },
  'pop': function(){
    return this.storage.pop();
  },
  'size': function(){
    return this.storage.length;
  }
};

var stack = makeStack();
console.log(stack.push('cool'));
stack.push('rad');
console.log(stack.size());
console.log(stack.pop());

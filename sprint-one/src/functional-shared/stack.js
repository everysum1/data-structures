var makeStackOld = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  instance.length = 0;
  instance.storage = {};

  _.extend(instance, stackMethodsOld);

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
  var stack = {};
  stack.storage = [];
  _extend(stack, stackMethods);
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

_extend = function(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
};

var stack = makeStack();
console.log(stack.push('cool'));
stack.push('rad');
console.log(stack.size());
console.log(stack.pop());

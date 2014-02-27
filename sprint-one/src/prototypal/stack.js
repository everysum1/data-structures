var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);

  instance.length = 0;
  instance.storage = {};

  return instance;

};

var stackMethods = {

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
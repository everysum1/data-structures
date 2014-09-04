var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(this.head === null){
      this.head = new makeNode(value);
      this.tail = this.head;
    } else{
      var tempNode = this.tail;
      this.tail.next = new makeNode(value);
      this.tail = this.tail.next;
      this.tail.before = tempNode;
    }
  };

  list.removeTail = function() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    else{
      this.tail = this.tail.before;
      this.tail.next = null;
    }
  };

  list.addToHead = function(value) {
    if(this.head === null){
      this.head = new makeNode(value);
      this.tail = this.head;
    } else{
      var tempNode = this.head;
      this.head.before = new makeNode(value);
      this.head = this.head.before;
      this.head.next = tempNode;
    }
  };

  list.removeHead = function(){
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = this.head.next;
      this.head.before = null;
    }
  };

  list.contains = function(target, node){
    node = node || this.head;
    if(node === null){
      return false;
    }
    while(node.next !== null) {
      if(node.value === target) {
        return true;
      }
      else if(node.next.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.before = null;
  return node;
};

var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value){
  var node = makeNode2(value);
  if(!this.head && !this.tail){
    this.head = node;
    this.tail = node;
  } else if (this.head === this.tail){
    this.head.next = node;
    node.before = this.head;
    this.tail = node;
  } else{
    this.tail.next = node;
    node.before = this.tail;
    this.tail = node;
  }
};

LinkedList.prototype.removeTail = function(){
  var node;
  if(this.head === this.tail){
    this.head = null;
    this.tail = null;
  } else {
    node = this.tail;
    this.tail = this.tail.before;
    this.tail.next = null;
    node.before = null;
  }
};

LinkedList.prototype.addToHead = function(value){
  var node = makeNode2(value);
  if(!this.head && !this.tail){
    this.head = node;
    this.tail = node;
  } else if (this.head === this.tail){
    this.tail.before = node;
    node.next = this.tail;
    this.head = node;
  } else{
    this.head.before = node;
    node.next = this.head;
    this.head = node;
  }
};

LinkedList.prototype.removeHead = function(){
  var node;
  if(this.head === this.tail){
    this.head = null;
    this.tail = null;
  } else {
    node = this.head;
    this.head = node.next;
    this.head.before = null;
    node.next = null;
  }
};

LinkedList.prototype.contains = function(value){
  var node = this.head;
  if(node.value === value){
    return true;
  }
  while(node.next !== null){
    if(node.next.value === value){
      return true;
    }
    node = node.next;
  }
  return false;
};

var makeNode2 = function(value){
  var node = {};
  node.before = null;
  node.next = null;
  node.value = value;
  return node;
};

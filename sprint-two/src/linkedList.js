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

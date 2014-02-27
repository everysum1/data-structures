var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(this.head === null){
      this.head = new makeNode(value);
      this.tail = this.head;
    } else{
      this.tail.next = new makeNode(value);
      this.tail = this.tail.next;
    }

  };

  list.removeHead = function(){
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = this.head.next;
    }
  };

  list.contains = function(target, node){
    node = node || head;
    while(node[next] !== null) {
      if(node[value] === target) {
        return true;
      }
      else if(node.next[value] === target) {
        return true;
      }
      node = node[next];
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

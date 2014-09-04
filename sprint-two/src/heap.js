var makeMaxHeap = function(){
  var heap = {};
  var storage = [null];
  var size = 0;

  heap.insert = function(val){
    var index = storage.push(val) -1;
    size++;
    bubble(index);
  };

  heap.delete = function(){
    if(storage.length === 2){
        size--;
        return storage.pop();
    } else if(storage.length === 1){
        return storage[0];
    }
    size--;
    var max = storage[1];
    storage[1] = storage.pop();
    sink(1);
    return max;
  };
  
  heap.getMax = function(){
    return storage[1];
  };

  heap.getSize = function(){
    return size;
  };

  heap.getStorage = function(){
    return storage.slice();
  };

  var bubble = function(index){
    var parent = Math.floor(index/2);
    if(parent > 0 && storage[parent] < storage[index]){
      storage[0] = storage[parent];
      storage[parent] = storage[index];
      storage[index] = storage[0];
      storage[0] = null;
      bubble(parent);
    }
  };

  var sink = function(index){
    var child1 = index*2;
    var child2 = index*2+1;
    var maxChild;
    
    if(storage[child1] !== undefined){

      if(storage[child2] === undefined){
        maxChild = child1;
      } else if(storage[child2] !== undefined){
        maxChild = storage[child1] > storage[child2] ? child1 : child2;
      }
      if(storage[index] < storage[maxChild]){
        storage[0] = storage[maxChild];
        storage[maxChild] = storage[index];
        storage[index] = storage[0];
        storage[0] = null;
        sink(maxChild);
      }
  
    }
  };

  return heap;
};

var heap = makeMaxHeap();
heap.insert(6);
heap.insert(7);
heap.insert(5);
heap.insert(8);
heap.insert(10);
heap.insert(1);
heap.insert(2);
var descendingOrder = [];
var size = heap.getSize();
console.log(size);
while(heap.getSize() > 0){
  descendingOrder.push(heap.delete());
}
console.log(descendingOrder);

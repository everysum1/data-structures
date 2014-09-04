class Heap(object):
    def  __init__(self, val):
        self.children = []
        self.heapOrder = []
        self.value = val
    def insert(self, val, level=None, newHeap=None):
        nextLevel = []
        if level == None:
            level = [self]
            newHeap = Heap(val)
        i = 0
        length = len(level)
        while i < length:
            node = level[i]
            if newHeap.value > node.value:
                if len(node.children) < 2:
                    node.children.append(newHeap)
                    return
                else:
                    nextLevel = nextLevel + node.children
            elif newHeap.value < node.value:
                newHeap.value, node.value = node.value, newHeap.value
                i = -1

            if i == len(level)-1:
                self.insert(val, nextLevel, newHeap)
            i += 1
    def heapArray(self, level=None):
        if level == None:
            level = [self]
            self.heapOrder(self.value)
        nextLevel = []
        i = 0
        while i < len(level):
            node = level[i]
            self.heapOrder.append(node.value)
            nextLevel = nextLevel + node.children
            i += 1
        if(len(nextLevel) > 0):
            self.heapArray(nextLevel)
    def delete(self):
        self.heapArray()
        amin = self.heapOrder[0]
        val = self.heapOrder.pop()
        self.heapOrder[0] = val
        i = 1
        exp = 1
        while(val > self.heapOrder[i]):
            if self.heapOrder[i] < self.heapOrder[i+1]:
                node = self.heapOrder[i]
                i = 1
            else:
                node = self.heapOrder[i+1]
                i = 3
            for i in range(1, exp+1):
                i += 2**exp
            exp += 1
            self.heapOrder[0] = node
        return amin


heap = Heap(5)
heap.insert(6)
heap.insert(7)
heap.insert(8)
heap.insert(5.5)

print heap.value
print heap.children[0].value
print heap.children[1].value
print heap.children[0].children[0].value
print heap.children[0].children[1].value
print heap.delete()

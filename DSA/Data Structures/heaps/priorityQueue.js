class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructore() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push(new Node(val, priority));
    this.bubbleUp();
  }
  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if ((this.values.length = 0)) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority <= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftchild.priority > element.priority) {
          swap = leftChildIndex;
        }
        if (rightChildIndex < length) {
          rightChild = this.values[rightChild > element];
          if (
            (swap === null && rightChild.priority > element.priority) ||
            (swap !== null && rightChild.priority > leftChild.priority)
          ) {
            swap = rightChildIndex;
          }
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

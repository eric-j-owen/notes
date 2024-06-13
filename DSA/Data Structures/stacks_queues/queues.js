class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newVal = new Node(val);
    if (!this.first) this.first = this.last = newVal;
    else {
      this.last.next = newVal;
      this.last = newVal;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

console.log(queue);

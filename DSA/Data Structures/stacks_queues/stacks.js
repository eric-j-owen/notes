class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newVal = new Node(val);
    if (!this.first) this.first = this.last = newVal;
    else {
      const prevFirst = this.first;
      this.first = newVal;
      this.first.next = prevFirst;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const popped = this.first;
    if (this.size === 1) this.first = this.last = null;
    else this.first = this.first.next;
    --this.size;
    return popped;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);

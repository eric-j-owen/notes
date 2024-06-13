class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  print() {
    let curr = this.head;
    console.log(`----------------`);
    console.log(`Length: ${this.length}`);
    while (curr) {
      console.log(`----------------`);
      console.log(`Node: ${curr.val}`);
      if (curr.prev) console.log(`- Prev: ${curr.prev.val}`);
      else console.log(`- Prev: null`);
      if (curr.next) console.log(`- Next: ${curr.next.val}`);
      else console.log(`- Next: null`);
      curr = curr.next;
    }
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    const popped = this.tail;
    if (!this.tail) return undefined;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    const shifted = this.head;
    if (!this.head) return undefined;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }
    this.length--;
    return shifted;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index === this.length) return null;
    let count = 0;
    let current = this.head;
    if (index <= this.length / 2) {
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(val);
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index === this.length) return false;
    if (index === 0) return this.shift(val);
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();
list.push("a");
list.push("b");
list.push("c");
list.push("d");
list.push("e");
list.push("f");
list.push("g");

list.print();

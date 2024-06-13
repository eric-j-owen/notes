class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currHead = this.head;
    this.head = currHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
    }
    return false;
  }

  insert(index, val) {
    const newNode = new Node(val);
    if (index < 0 || index > this.length) return false;
    else if (index === this.length - 1) return this.push(val);
    else if (index === 0) return this.unshift(val);
    else {
      const prevNode = this.get(index - 1);
      const nextNode = this.get(index + 1);
      newNode.next = nextNode;
      prevNode.next = newNode;
    }
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    else if (index === this.length - 1) this.pop();
    else if (index === 0) this.shift();
    else {
      const prevNode = this.get(index - 1);
      const removed = prevNode.next;
      prevNode.next = removed.next;
    }
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let singlyLinked = new SinglyLinkedList();
singlyLinked.push("one");
singlyLinked.push("two");
singlyLinked.push("three");
singlyLinked.reverse();

console.log(singlyLinked);

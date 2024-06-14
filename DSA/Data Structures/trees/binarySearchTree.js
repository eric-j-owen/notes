class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      else if (value > current.value) current = current.right;
      else current = current.left;
    }
    return false;
  }

  BFS() {
    let node = this.root,
      data = [],
      queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    const data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);
console.log(bst.BFS());
console.log(bst.DFSPreOrder());

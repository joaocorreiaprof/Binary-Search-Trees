import Node from "./Node";

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    return this.buildBST(array, 0, array.length - 1);
  }

  buildBST(array, start, end) {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = this.buildBST(array, start, mid - 1);
    node.right = this.buildBST(array, mid + 1, end);

    return node;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.data) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.data) {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }

  deleteItem() {}
}

export default Tree;

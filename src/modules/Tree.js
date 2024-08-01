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
  insert() {}
  deleteItem() {}
}

export default Tree;

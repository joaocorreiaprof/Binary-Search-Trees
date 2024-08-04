import Node from "./Node";

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    array = [...new Set(array)].sort((a, b) => a - b);
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

  deleteItem(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) {
      return node;
    }

    if (value < node.data) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.data) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }

      let succ = this.getSuccessor(node);
      node.data = succ.data;
      node.right = this.deleteNode(node.right, succ.data);
    }

    return node;
  }

  getSuccessor(node) {
    let curr = node.right;
    while (curr !== null && curr.left !== null) {
      curr = curr.left;
    }
    return curr;
  }

  find(value) {
    const result = this.findValue(this.root, value);
    return result ? result.data : null;
  }

  findValue(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.data) {
      return this.findValue(node.left, value);
    } else if (value > node.data) {
      return this.findValue(node.right, value);
    }
    return node;
  }

  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback function is required");
    }

    if (this.root === null) {
      return;
    }

    let queue = [this.root];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      callback(currentNode);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  inOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback function is required");
    }
    this.inOrderTraversal(this.root, callback);
  }

  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node);
      this.inOrderTraversal(node.right, callback);
    }
  }

  preOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback function is required");
    }
    this.preOrderTraversal(this.root, callback);
  }

  preOrderTraversal(node, callback) {
    if (node !== null) {
      callback(node);
      this.preOrderTraversal(node.left, callback);
      this.preOrderTraversal(node.right, callback);
    }
  }

  postOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback function is required");
    }
    this.postOrderTraversal(this.root, callback);
  }

  postOrderTraversal(node, callback) {
    if (node !== null) {
      this.postOrderTraversal(node.left, callback);
      this.postOrderTraversal(node.right, callback);
      callback(node);
    }
  }

  height(node) {
    if (node === null) {
      return -1;
    }
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node) {
    return this.depthRecursive(this.root, node, 0);
  }

  depthRecursive(currentNode, targetNode, currentDepth) {
    if (currentNode === null) {
      return -1;
    }
    if (currentNode === targetNode) {
      return currentDepth;
    }
    const leftDepth = this.depthRecursive(
      currentNode.left,
      targetNode,
      currentDepth + 1
    );
    if (leftDepth !== -1) {
      return leftDepth;
    }
    return this.depthRecursive(currentNode.right, targetNode, currentDepth + 1);
  }

  isBalanced(node = this.root) {
    if (node === null) {
      return true;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance() {
    const nodes = [];
    this.inOrder((node) => nodes.push(node.data));
    this.root = this.buildTree(nodes);
  }
}

export default Tree;

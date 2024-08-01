# Binary Search Tree

This project implements a Binary Search Tree (BST) in JavaScript with various functionalities, including insertion, deletion, searching, and traversals. The tree is built from an array of data, and several methods are provided to manipulate and analyze the tree structure.

## Features

### Node Class/Factory

The Node class represents a node in the binary search tree. Each node has:

- data: the value stored in the node.
- left: a reference to the left child node.
- right: a reference to the right child node.

### Tree Class/Factory

The Tree class represents the binary search tree. It is initialized with an array and includes:

- root: the root node of the tree.
- buildTree(array): a method to construct a balanced binary search tree from the given array.

## Driver Script

A driver script is included to demonstrate the functionality of the BST. The script performs the following actions:

1. Creates a binary search tree from an array of random numbers < 100
2. Confirms that the tree is balanced by calling isBalanced()
3. Prints out all elements in level, pre, post, and in-order
4. Unbalances the tree by adding several numbers > 100
5. Confirms that the tree is unbalanced by calling isBalanced()
6. Balances the tree by calling rebalance()
7. Confirms that the tree is balanced by calling isBalanced()
8. Prints out all elements in level, pre, post, and in-order.

### Methods

- buildTree(array)
- insert(value)
- deleteItem(value)
- find(value)
- levelOrder(callback)
- inOrder(callback)
- preOrder(callback)
- postOrder(callback)
- height(node)
- depth(node)
- isBalanced()
  -rebalance()

## Getting Started

Follow these instructions to get a copy up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm: Usually installed with Node.js

### Installing

1. Clone the repository to your local machine:

2. Enter the project

3. npm install

4. npm run build

5. npm run lint

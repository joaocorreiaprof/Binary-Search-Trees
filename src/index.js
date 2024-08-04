import "./style.css";
import Tree from "./modules/Tree";
import sortArray from "./modules/sortArray";
import prettyPrint from "./modules/prettyPrint";

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let sortedArray = sortArray(array);
console.log(sortedArray);

const tree = new Tree(sortedArray);
tree.insert(2);
tree.deleteItem(23);
console.log(tree);
prettyPrint(tree.root);
console.log(tree.find(67));

const printNode = (node) => {
  console.log(node.data);
};

tree.levelOrder(printNode);

import "./style.css";
import Tree from "./modules/Tree";
import { sortArray } from "./modules/sortArray";
import prettyPrint from "./modules/prettyPrint";

let array = [7, 3, 9, 10, 10, 50, 1];

let sortedArray = sortArray(array);
console.log(sortedArray);

const tree = new Tree(sortedArray);
console.log(tree);
prettyPrint(tree.root);

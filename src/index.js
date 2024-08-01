import "./style.css";
import Tree from "./modules/Tree";
import { sortArray } from "./modules/sortArray";

let array = [7, 3, 9, 10, 50, 1, 0, 50];

console.log(sortArray(array));

const tree = new Tree(array);
console.log(tree);

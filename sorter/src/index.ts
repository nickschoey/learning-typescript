import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const array = [200, 1, 5, 2, 23, 322, 3, 5, 76, -1, 6, 64];
const string = 'Jordi Martinez Zambrano';

// Sorter for numbers
const numCollection = new NumbersCollection(array);
array.sort();
console.log(numCollection.data);

// Sorter for Stings
const stringSorter = new CharactersCollection(string);
stringSorter.sort();

console.log(stringSorter.data);

// Sorter for Linked List
const linkedList = new LinkedList();
linkedList.add(520);
linkedList.add(-4);
linkedList.add(35);
linkedList.add(10000);
linkedList.add(2);
linkedList.add(246);

linkedList.sort();
linkedList.print();

// my bubble sorting algorithm
// function sort(array: number[]): number[] {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       const val = array[j];
//       const nextVal = array[j + 1];
//       if (val > nextVal) {
//         array[j] = nextVal;
//         array[j + 1] = val;
//       }
//     }
//   }
//   return array;
// }

// console.log(sort(array));

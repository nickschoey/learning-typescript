import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const array = [200, 1, 5, 2, 23, 322, 3, 5, 76, -1, 6, 64];
const string = 'Jordi Martinez Zambrano';
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

// Sorter for Stings
const stringSorter = new Sorter(new CharactersCollection(string));
stringSorter.sort();

console.log(stringSorter.collection);

// SOrter for Linked List
const liList = new LinkedList();
liList.add(520);
liList.add(-4);
liList.add(35);
liList.add(10000);
liList.add(2);
liList.add(246);

const llSorter = new Sorter(liList);
llSorter.sort();
liList.print();

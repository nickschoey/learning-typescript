import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

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

const sorter = new Sorter(new CharactersCollection(string));
sorter.sort();

console.log(sorter.collection);

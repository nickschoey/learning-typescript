const array = [200, 1, 5, 2, 23, 322, 3, 5, 76, -1, 6, 64];

// my bubble sorting algorithm
function sort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const val = array[j];
      const nextVal = array[j + 1];
      if (val > nextVal) {
        array[j] = nextVal;
        array[j + 1] = val;
      }
    }
  }
  return array;
}

console.log(sort(array));

class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {}
}

export class Sorter {
  constructor(public collection: ) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
          const left = this.collection[j];
          const right = this.collection[j + 1];
          if (left > right) {
            this.collection[j] = right;
            this.collection[j + 1] = left;
          }
        

      }
    }
  }
}

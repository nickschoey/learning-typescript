interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const coke = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink has ${this.sugar} grams of sugar.`;
  }
};

const report = (item: Reportable): void => {
  console.log(item.summary());
};

report(oldCivic);

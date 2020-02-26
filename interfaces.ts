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

const report = (item: Reportable): void => {
  console.log(item.summary());
};

report(oldCivic);

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic: Vehicle = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = ({ year, name, broken }: Vehicle): void => {
  console.log(`This ${year} ${name} is ${broken}`);
};

printVehicle(oldCivic);

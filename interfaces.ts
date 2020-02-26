interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic: Vehicle = {
  name: 'Civic',
  year: 2000,
  broken: true
};

const printVehicle = ({ year, name, broken }: Vehicle): void => {
  console.log(`This ${year} ${name} is ${broken}`);
};

printVehicle(oldCivic);

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true
};

const printVehicle = ({
  year,
  name,
  broken
}: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`This ${year} ${name} is ${broken}`);
};

printVehicle(oldCivic);

import faker from 'faker';
import { Placeable } from './CustomMap';

export class Company implements Placeable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `<div><h1>${this.companyName}</h1> <p>${this.catchPhrase}</p></div>`;
  }
}

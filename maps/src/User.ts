import faker from 'faker';
import { Placeable } from './CustomMap';

export class User implements Placeable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `
    <div>
      <p>Mr./Ms. ${this.name}</p>
    </div>`;
  }
}

class Vehicle {
  drive(): void {
    console.log('vruum!!');
  }

  honk(): void {
    console.log('beep!');
  }
}

class Car extends Vehicle {}
const vehicle = new Vehicle();

vehicle.drive();

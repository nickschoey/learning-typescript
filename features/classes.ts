class Vehicle {
  constructor(public color: string) {}

  private drive(): void {
    console.log('vruum!!');
  }

  protected honk(): void {
    console.log('beep!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

class Automobile extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  makeNoise(): void {
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const automobile = new Automobile(4, 'red');

vehicle.startDrivingProcess();

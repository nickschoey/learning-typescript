class Boat {
  color: string = 'red';

  @testDecorator
  pilot(): void {
    console.log('swishh');
  }
  get formattedColor(): string {
    return `The color is ${this.color}`;
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key:', key);
}

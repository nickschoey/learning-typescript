class Boat {
  color: string = 'red';

  @logError
  pilot(): void {
    throw new Error();
  }
  get formattedColor(): string {
    return `The color is ${this.color}`;
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log('Target:', target);
  console.log('Key:', key);
}

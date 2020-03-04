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
  const method = desc.value;
  desc.value = function() {
    try {
      method();
    } catch (error) {
      console.log('oops, there was an eror');
    }
  };
}

new Boat().pilot();

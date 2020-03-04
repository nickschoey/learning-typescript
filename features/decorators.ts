class Boat {
  color: string = 'red';

  @logError('An error was thrown by pilot')
  pilot(): void {
    throw new Error();
  }
  get formattedColor(): string {
    return `The color is ${this.color}`;
  }
}
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot();

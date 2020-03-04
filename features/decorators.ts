@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @logError('An error was thrown by pilot')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('vrum');
    }
    throw new Error();
  }
  get formattedColor(): string {
    return `The color is ${this.color}`;
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
  console.log(target.color);
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

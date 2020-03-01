import { User } from './models/User';

const user = new User({ name: 'Gio', age: 22 });

console.log(user.get('name'));

// reminder on how 'this' works in JS

const colors = {
  color: 'red',
  printColor() {
    console.log(this.color);
  }
};

colors.printColor(); //red

const printColor = colors.printColor;

printColor(); // error: color is undefined

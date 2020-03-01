import { User } from './models/User';

const user = new User({ name: 'Gio', age: 22 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('something has changed');
});

user.set({ name: 'New Name' });
console.log(user.get('name'));

import { User } from './models/User';

const user = new User({ name: 'Gio', age: 22 });

user.on('change', () => {
  console.log('hey!');
});

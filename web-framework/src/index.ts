import { User } from './models/User';

const user = new User({ name: 'Ronaldinho', age: 25 });

user.save();

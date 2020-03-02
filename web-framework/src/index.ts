import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Jordi', age: 36 });
const rootElement = document.getElementById('root');

if (rootElement) {
  const userForm = new UserForm(rootElement, user);
  userForm.render();
} else {
  throw new Error('Root Element not found');
}

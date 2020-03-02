import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'Jordi', age: 36 });
const rootElement = document.getElementById('root');

if (rootElement) {
  const userEdit = new UserEdit(rootElement, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root Element not found');
}

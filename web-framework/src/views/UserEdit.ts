import { View } from './View';
import { User } from '../models/User';
import { UserProps } from './../models/User';

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <div class="user-show"></div>
      <div class="user-form"></div>
    </div>
    `;
  }
}

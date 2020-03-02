import { View } from './View';
import { UserProps, User } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save': this.onSaveClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };
  onSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      this.model.set({ name: input.value });
    }
  };

  template(): string {
    return `
    <div>
      <input id="name-input" placeholder="${this.model.get('name')}"/>
      <button class="set-age">Set Random Age</button>
      <button class="set-name">Update Name</button>
      <button class="save">Save</button>
    </div>
    `;
  }
}

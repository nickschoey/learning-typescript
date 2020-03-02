import { User } from '../models/User';

export class UserForm {
  constructor(public parent: HTMLElement, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => this.render());
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    this.model.set({ name: input.value });
  };

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User Name: ${this.model.get('name')}</div>
      <div>User Age: ${this.model.get('age')}</div>
      <input id="name-input"/>
      <button class="set-age">Set Random Age</button>
      <button class="set-name">Update Name</button>
    </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (const key in eventsMap) {
      const [eventName, selector] = key.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[key]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}

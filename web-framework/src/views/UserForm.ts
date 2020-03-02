import { User } from '../models/User';

export class UserForm {
  constructor(public parent: HTMLElement, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClicked
    };
  }

  onButtonClicked(): void {
    console.log('Hi there!');
  }
  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User Name: ${this.model.get('name')}</div>
      <div>User Age: ${this.model.get('age')}</div>
      <input></input>
      <button>Click Me!</button>
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}

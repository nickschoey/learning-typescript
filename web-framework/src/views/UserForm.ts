export class UserForm {
  constructor(public parent: HTMLElement) {}

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
      <input></input>
      <button>Click Me!</button>
    </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}

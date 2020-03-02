import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: HTMLElement, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => this.render());
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

import { createDOMElementFromString } from '../utils/create-dom-element-from-string.js';

export class VideoFactory {
  static template(_) {
    return '';
  }

  static create(film) {
    const compiledTemplate = this.template(film);
    const $element = createDOMElementFromString(compiledTemplate);
    return $element;
  }
}

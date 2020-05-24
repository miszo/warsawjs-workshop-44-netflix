import { EventEmitter } from '../../utils/event-emmiter.js';

export class PlayerGui extends EventEmitter {
  build(Theme, $target) {
    this.theme = new Theme();
    this.theme
      .createProgress()
      .addButton('play', 'Play', () => {
        this.triggerEvent('click:play');
      })
      .addButton('stop', 'Stop', () => {
        this.triggerEvent('click:stop');
      })
      .render($target);
  }

  setProgress(progress) {
    this.theme.setProgress(progress);
  }
}

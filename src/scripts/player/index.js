import { PlayerCore } from './core/index.js';
import { PlayerGui } from './gui/index.js';

export class Player {
  constructor(); {
    const core = new PlayerCore();
    const gui = new PlayerGui();

    gui.addEventListener('click:play', () => {
      core.play
    });
  }
}

import { Player } from './player/index.js';

function main() {
  const $target = document.querySelector('.player-container');
  const player = new Player();
  player.setup($target);
}

main();

import { Player } from './player/index.js';

function main() {
  console.log('film page');
  const $target = document.querySelector('.player-container');

  const player = new Player();
  player.setup($target);
}

main();

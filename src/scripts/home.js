import { VideoPlayableFactory } from './videos/video-playable-factory.js';
import { VideoReadonlyFactory } from './videos/video-readonly-factory.js';

function main() {
  console.log('home page');

  const $target = document.querySelector('.video-list-container');

  Array.from({ length: 6 }).forEach((_, index) => {
    const imageId = index * 100;
    const film = {
      playable: Math.random() > 0.5,
      title: 'Some random title',
      thumbnail: `https://picsum.photos/id/${imageId}/300/150/`,
    };

    let $v = null;
    if (film.playable) {
      $v = VideoPlayableFactory.create(film);
    } else {
      $v = VideoReadonlyFactory.create(film);
    }
    $target.append($v);
  });
}

main();

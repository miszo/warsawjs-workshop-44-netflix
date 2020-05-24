export class VideoGenerator {
  static generate(strategies, $target) {
    Array.from({ length: 6 }).forEach((_, index) => {
      const imageId = index * 100;
      const film = {
        playable: Math.random() > 0.5,
        isPaid: Math.random() > 0.5,
        title: 'Some Random Film Title',
        thumbnail: `https://picsum.photos/id/${imageId}/300/150/`,
      };

      let $v = null;
      strategies.forEach((value, key) => {
        if (typeof key === 'function' && key(film)) {
          $v = value(film);
        }
      });

      if ($v === null) {
        const defaultStrategy = strategies.get('default');
        $v = defaultStrategy(film);
      }

      $target.append($v);
    });
  }
}

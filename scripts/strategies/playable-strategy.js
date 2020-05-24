import { strategies } from './manager.js';
import { VideoPlayableFactory } from '../videos/video-playable-factory.js';

strategies.set(
  (film) => film.playable,
  (film) => VideoPlayableFactory.create(film),
);

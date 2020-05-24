import { strategies } from './manager.js';
import { VideoPaidFactory } from '../videos/video-paid-factory.js';

strategies.set(
  (film) => film.isPaid,
  (film) => VideoPaidFactory.create(film),
);

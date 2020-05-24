import { strategies } from './manager.js';
import { VideoReadonlyFactory } from '../videos/video-readonly-factory.js';

strategies.set('default', (film) => VideoReadonlyFactory.create(film));

import { VideoFactory } from './video-factory.js';

export class VideoPlayableFactory extends VideoFactory {
  static template({ thumbnail, title }) {
    return `
      <div class="card mb-3">
        <a href="film.html">
            <img
                src="${thumbnail}"
                class="card-img-top"
                alt=""
            />
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <a href="film.html">
              ${title}
            </a>
          </h5>
        </div>
      </div>
      `;
  }
}

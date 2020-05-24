export class DefaultTheme {
  constructor() {
    this.$element = document.createElement('div');
    this.$element.classList.add('controls');
  }

  createProgress() {
    const $progress = document.createElement('div');
    $progress.classList.add('progress', 'mb-5', 'bg-white');

    const $bar = document.createElement('div');
    $bar.classList.add('progress-bar', 'bg-success');

    $progress.appendChild($bar);

    this.$element.appendChild($progress);
    return this;
  }

  addButton(cssClass, label, callback) {
    const $button = document.createElement('button');
    $button.textContent = label;
    $button.classList.add('btn', 'btn-primary', 'mr-2', cssClass);
    $button.addEventListener('click', callback);
    this.$element.appendChild($button);
    return this;
  }

  render($target) {
    $target.appendChild(this.$element);
    return this.$element;
  }

  setProgress(progress) {
    const $progress = this.$element.querySelector('.progress-bar');
    $progress.style.width = `${progress}%`;
  }
}

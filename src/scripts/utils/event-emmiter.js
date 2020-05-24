export class EventEmitter {
  constructor() {
    this._listeners = {};
  }

  addListener(name, callback) {
    this._listeners[name] = this._listeners[name] || [];
    this._listeners[name].push(callback);
  }

  triggerEvent(name, agrs) {
    (this._listeners[name] || []).forEach((callback) => {
      callback(agrs);
    });
  }
}

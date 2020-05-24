export class EventEmitter {
  constructor() {
    this._listeners = {};
  }

  addListener(name, callback) {
    this._listeners[name] = this._listeners[name] || [];
    this._listeners[name].push(callback);
  }

  triggerEvent(name, payload) {
    (this._listeners[name] || []).forEach((callback) => {
      callback(payload);
    });
  }
}

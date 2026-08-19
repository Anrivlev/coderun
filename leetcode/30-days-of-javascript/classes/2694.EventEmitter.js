class EventEmitter {
  callbackMap = new Map();

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    let eventCallbackSet = this.callbackMap.get(eventName);
    if (eventCallbackSet === undefined) {
      eventCallbackSet = new Set();
      this.callbackMap.set(eventName, eventCallbackSet);
    }
    eventCallbackSet.add(callback);
    return {
      unsubscribe: () => {
        eventCallbackSet.delete(callback);
        if (eventCallbackSet.size === 0) this.callbackMap.delete(eventName);
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    const eventCallbackSet = this.callbackMap.get(eventName);
    if (eventCallbackSet === undefined) return [];
    return Array.from(eventCallbackSet).map((callback) => callback(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

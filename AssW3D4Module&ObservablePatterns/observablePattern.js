function Subject() {
    this.observers = {};
    this.on = (event, fn) => {
      if (!this.observers[event]) {
        this.observers[event] = [];
      }
      this.observers[event].push(fn);
    };
    this.emit = (msg) => {
      for (let each in this.observers) {
        this.observers[each].forEach((fn) => {
          fn.call(null, msg);
        });
      }
    };
  }
const subject = new Subject();
subject.on('eat', function1);
subject.on('eat', function2);
subject.emit('eat');


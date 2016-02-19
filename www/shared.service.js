(function (root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    factory(exports);
  else if (typeof define === 'function' && define.amd)
    // AMD: Register as an anonymous module
    define(['exports'], factory);
  else if (typeof exports === 'object' && typeof exports.nodeName !== 'string')
    // CommonJS
    factory(exports);
  else
    // browser globals (root is window)
    factory(root.app);
}(this, function (exports) {

  const ServiceURL = 'http://jsonplaceholder.typicode.com/';

  // Attach properties to the exports object to define exported properties
  exports.SharedSrv = ng.core
  .Class({
    constructor: function SharedSrv () {
      this.notifier = new ng.core.EventEmitter();
    },
    
    notify: function (e) {
      this.notifier.emit(e);
    },

    getNotifier: function () {
      return this.notifier;
    }
  });

}));

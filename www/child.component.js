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

  exports.Child = ng.core
  .Component({
    selector: 'child',
    templateUrl: 'child.component.html',
    styleUrls: ['child.component.css'],
    inputs: ['ctopic'],
    outputs: ['counted:count']
  })
  .Class({
    constructor: function Child () {
      this.role = 'child';
      this.count = 0;
      this.counted = new ng.core.EventEmitter();
    },

    getCount: function () {
      return this.counted;
    },
    
    incrCount: function () {
      this.counted.emit(++this.count);
    }
  });

}));

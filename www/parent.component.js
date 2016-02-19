(function (root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    factory(exports, require('child.component'), require('shared.service'));
  else if (typeof define === 'function' && define.amd)
    // AMD: Register as an anonymous module
    define(['exports', 'child.component', 'shared.service'], factory);
  else if (typeof exports === 'object' && typeof exports.nodeName !== 'string')
    // CommonJS
    factory(exports, require('child.component'), require('shared.service'));
  else
    // browser globals (root is window)
    factory(root.app, root.app, root.app);
}(this, function (exports, child, srv) {

  exports.Parent = ng.core
  .Component({
    selector: 'parent',
    templateUrl: 'parent.component.html',
    styleUrls: ['parent.component.css'],
    directives: [child.Child]
  })
  .Class({
    constructor: [srv.SharedSrv, function Parent (service) {
      this.role = 'parent';
      this.topic = 'magic';
      this.count = 0;
      this.service = service;
    }],
    
    updateCount: function (e) {
      this.count = e;
      this.service.notify(e);
    }
  });

}));
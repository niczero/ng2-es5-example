(function (root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    factory(exports, require('shared.service'));
  else if (typeof define === 'function' && define.amd)
    // AMD: Register as an anonymous module
    define(['exports', 'shared.service'], factory);
  else if (typeof exports === 'object' && typeof exports.nodeName !== 'string')
    // CommonJS
    factory(exports, require('shared.service'));
  else
    // browser globals (root is window)
    factory(root.app, root.app);
}(this, function (exports, srv) {

  exports.Other = ng.core
  .Component({
    selector: 'other',
    templateUrl: 'other.component.html',
    styleUrls: ['other.component.css']
  })
  .Class({
    constructor: [srv.SharedSrv, function Other (service) {
      this.role = 'other';
      this.count = 0;
      this.service = service;
    }],

    ngOnInit: function () {
      var _this = this;
      this.subscription = this.service.getNotifier().subscribe(
        function (e) { _this.count = e; },
        function (err) { console.error(err); }
      );
    },

    ngOnDestroy: function () {
      this.subscription.unsubscribe();
    }
  });

}));

(function($) {
  
  'use strict';

  var app = {};

  app.init = function() {
    var $body = $('body'),
        self = this;

    self.navbarInit();

    console.log($body);
  };

  app.init();

}(jQuery));
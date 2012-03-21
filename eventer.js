(function() {
  "use strict";
  var emitter = require('events').EventEmitter
    , catcher = new emitter()
    , count = 0
    , timeout = 100 * 1000
    , crypto = require('crypto')
    , interval
    ;

  catcher.on('a', function(num) {
    var index = 0
      ;
    //while(index++ < num) {
    //  crypto.createHash('md5').update(String(num)).digest("hex");
    //}
    console.log(num);
  });

  while(timeout > 0) {
    count++;
    timeout--;
    setTimeout(function() {
      catcher.emit('a', count);
    }, timeout);
  }
}());

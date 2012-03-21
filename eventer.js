(function() {
  "use strict";
  var emitter = require('events').EventEmitter
    , catcher = new emitter()
    , count = 0
    , timeout = 90 * 1000
    , crypto = require('crypto')
    , interval
    ;

  catcher.on('a', function(num) {
    crypto.createHash('md5').update(String(num)).digest("hex");
    console.log(num);
  });

  interval = setInterval(function() {
    count += 1;
    catcher.emit('a', count);
  }, 0);

  setTimeout(function() {
    clearInterval(interval)
  }, timeout);
}());

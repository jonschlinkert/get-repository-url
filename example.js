'use strict';

var repo = require('./');

repo('assemble', function(err, url) {
  console.log(url);
});

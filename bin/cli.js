#!/usr/bin/env node

'use strict';

var repo = require('../');

if(!process.argv[2]) {
  process.stdout.write('Missing argument: package' + "\n");
  process.exit(1);
}

repo(process.argv[2], function(err, url) {
  if(!err) {
    process.stdout.write(url + "\n");
    process.exit(0);
  }
  process.stderr.write(err.name + ': ' + err.message + "\n");
  process.exit(1);
});

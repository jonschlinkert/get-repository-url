/*!
 * get-repository-url <https://github.com/jonschlinkert/get-repository-url>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var parse = require('parse-github-url');
var isObject = require('isobject');
var pkg = require('get-pkg');

module.exports = function(name, cb) {
  pkg(name, function(err, pkg) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, repository(pkg));
  });
};

function repository(pkg) {
  if (!isObject(pkg)) {
    return null;
  }

  var url = pkg.repository || pkg.homepage || pkg.bugs.url;
  if (isObject(url)) {
    url = url.url;
  }
  if (!url || typeof url !== 'string') {
    return null;
  }

  if (/github\.com/.test(url) && /\/issues$/.test(url)) {
    return url.replace(/\/issues$/, '');
  }
  var parsed = parse(url);
  return `https://github.com/${parsed.repository}`;
}

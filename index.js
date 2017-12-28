/*!
 * get-repository-url <https://github.com/jonschlinkert/get-repository-url>
 *
 * Copyright (c) 2016-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isObject = require('isobject');
var parse = require('parse-github-url');
var pkg = require('get-pkg');

module.exports = function(name, cb) {
  if (typeof name !== 'string' || name === '') {
    cb(new TypeError('expected repository name to be a non-empty string'));
    return;
  }

  pkg(name, function(err, pkg) {
    if (err) return cb(err);
    cb(null, repository(pkg));
  });
};

function repository(pkg) {
  if (!isObject(pkg)) {
    return null;
  }

  var url = pkg.repository || pkg.homepage || (pkg.bugs && pkg.bugs.url);
  if (isObject(url)) {
    url = url.url;
  }
  if (!isString(url)) {
    return null;
  }

  if (/github\.com/.test(url) && /\/issues$/.test(url)) {
    return url.replace(/\/issues$/, '');
  }
  var parsed = parse(url);
  return `https://github.com/${parsed.repository}`;
}

function isString(val) {
  return val && typeof val === 'string';
}

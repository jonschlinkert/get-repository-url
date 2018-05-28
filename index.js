/*!
 * get-repository-url <https://github.com/jonschlinkert/get-repository-url>
 *
 * Copyright (c) 2016-present, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const util = require('util');
const parse = require('parse-github-url');
const pkg = require('get-pkg');
const isObject = val => val !== null && typeof val === 'object';
const isString = val => val !== '' && typeof val === 'string';

function getRepsitoryUrl(name, cb) {
  if (typeof cb !== 'function') {
    return util.promisify(getRepsitoryUrl)(name);
  }

  if (!isString(name)) {
    cb(new TypeError('expected repository name to be a non-empty string'));
    return;
  }

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

  let url = pkg.repository || pkg.homepage || (pkg.bugs && pkg.bugs.url);
  if (isObject(url)) {
    url = url.url;
  }

  if (!isString(url)) {
    return null;
  }

  if (/github\.com/.test(url) && /\/issues$/.test(url)) {
    return url.replace(/\/issues$/, '');
  }

  const parsed = parse(url);
  return `https://github.com/${parsed.repository}`;
}

module.exports = getRepsitoryUrl;

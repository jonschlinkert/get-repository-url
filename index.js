/*!
 * get-repository-url <https://github.com/jonschlinkert/get-repository-url>
 *
 * Copyright (c) 2016-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const isObject = require('isobject');
const parse = require('parse-github-url');
const pkg = require('get-pkg');

function getRepsitoryUrl(name, cb) {
  if (typeof cb !== 'function') {
    return getRepsitoryUrl.promise(name);
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

getRepsitoryUrl.promise = function(name) {
  return new Promise(function(resolve, reject) {
    getRepsitoryUrl(name, function(err, url) {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
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

function isString(val) {
  return val && typeof val === 'string';
}

module.exports = getRepsitoryUrl;

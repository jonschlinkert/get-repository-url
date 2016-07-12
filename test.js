/*!
 * get-repository-url <https://github.com/jonschlinkert/get-repository-url>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var repositoryURL = require('./');

describe('repository URL', function() {
  it('should get a package.json for the given project', function(cb) {
    repositoryURL('generate', function(err, url) {
      assert(!err);
      assert(url);
      assert.equal(url, 'https://github.com/generate/generate');
      cb();
    });
  });

  it('should handle errors', function(cb) {
    repositoryURL('fofofofofofoofofof', function(err, url) {
      assert(err);
      assert.equal(err.message, 'document not found');
      cb();
    });
  });

  it('should handle empty strings', function(cb) {
    repositoryURL('', function(err, url) {
      assert(err);
      assert.equal(err.message, 'Internal Server Error');
      cb();
    });
  });

  it('should handle scoped packages', function(cb) {
    repositoryURL('@cycle/core', function(err, url) {
      assert(!err);
      assert(url);
      assert.equal(url, 'https://github.com/cyclejs/core');
      cb();
    });
  });
});

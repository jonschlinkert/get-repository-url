# get-repository-url [![NPM version](https://img.shields.io/npm/v/get-repository-url.svg?style=flat)](https://www.npmjs.com/package/get-repository-url) [![NPM downloads](https://img.shields.io/npm/dm/get-repository-url.svg?style=flat)](https://npmjs.org/package/get-repository-url) [![Build Status](https://img.shields.io/travis/jonschlinkert/get-repository-url.svg?style=flat)](https://travis-ci.org/jonschlinkert/get-repository-url)

Get the GitHub repository URL from a NPM package name.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save get-repository-url
```

## Usage

```js
var repositoryUrl = require('get-repository-url');

repositoryUrl('generate', function(err, url) {
  console.log(url);
  //=> 'https://github.com/generate/generate'
});
```

## About

### Related projects

* [get-pkg](https://www.npmjs.com/package/get-pkg): Get the package.json for a project from npm. | [homepage](https://github.com/jonschlinkert/get-pkg "Get the package.json for a project from npm.")
* [get-pkgs](https://www.npmjs.com/package/get-pkgs): Get the package.json for an array of repos from the npm registry, optionally filtering properties… [more](https://github.com/jonschlinkert/get-pkgs) | [homepage](https://github.com/jonschlinkert/get-pkgs "Get the package.json for an array of repos from the npm registry, optionally filtering properties using glob patterns.")
* [github-base](https://www.npmjs.com/package/github-base): Base methods for creating node.js apps that work with the GitHub API. | [homepage](https://github.com/jonschlinkert/github-base "Base methods for creating node.js apps that work with the GitHub API.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/get-repository-url/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 12, 2016._
# gh-conf-response

[![Build](https://github.com/gh-conf/gh-conf-response/actions/workflows/nodejs.yml/badge.svg)](https://github.com/gh-conf/gh-conf-response/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/gh-conf-response.svg)](https://www.npmjs.com/package/gh-conf-response)
[![NPM Downloads](https://img.shields.io/npm/dt/gh-conf-response.svg)](https://www.npmjs.com/package/gh-conf-response)
[![Github Repo Size](https://img.shields.io/github/repo-size/gh-conf/gh-conf-response.svg)](https://github.com/gh-conf/gh-conf-response)
[![LICENSE](https://img.shields.io/npm/l/gh-conf-response.svg)](https://github.com/gh-conf/gh-conf-response/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/gh-conf/gh-conf-response.svg)](https://github.com/gh-conf/gh-conf-response/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/gh-conf/gh-conf-response.svg)](https://github.com/gh-conf/gh-conf-response/commits/master)

Response builder for gh-conf libraries

> Give us a :star: if you like our work :heart:

## Install

```
$ npm install @gh-conf/gh-conf-response
```

## Usage

```javascript
const { formatError, formatSuccess } = require("@gh-conf/gh-conf-response");

const successResponse = formatSuccess("Successfully passed", {
  name: "formatSuccess",
});
console.log(successResponse);
// Output
/**
 * {
 *  status: 'success',
 *  message: 'Successfully passed',
 *  data: {
 *    name: 'formatSuccess'
 *  }
 * }
 **/

const errorResposne = formatError("Error running tests", { err: "101" });
console.log(successResponse);
// Output
/**
 * {
 *  status: 'err',
 *  message: 'Error running tests',
 *  data: {
 *    err: '101'
 *  }
 * }
 **/
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/gh-conf/gh-conf-response/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase


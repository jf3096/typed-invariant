# invariant

[![Build Status](https://travis-ci.org/zertosh/invariant.svg?branch=master)](https://travis-ci.org/zertosh/invariant)

A custom Facebook's `invariant` library which is a way to provide descriptive errors in development but generic errors in production.
Here are the changes:

1. In ES6 environment, there is no need to use format which is "/%s/g" stated in source code. As I prefer to use `Hello ${username}` instead.
2. In some cases, I need to differentiate errors by creating different instance for logging purposes. e.g: 
```javascript
    class ReduxError extends Error {
        ...
    }
```

## Install

With [npm](http://npmjs.org) do:

```sh
npm install typed-invariant
```

## `invariant(condition, message)`

```js
var invariant = require('invariant');

invariant(someTruthyVal, 'This will not throw');
// No errors

invariant(someFalseyVal, 'This will throw an error with this message');
// Error: Invariant Violation: This will throw an error with this message
```

**Note:** When `process.env.NODE_ENV` is not `production`, the message is required. If omitted, `invariant` will throw regardless of the truthiness of the condition. When `process.env.NODE_ENV` is `production`, the message is optional – so they can be minified away.

### Browser

When used with [browserify](https://github.com/substack/node-browserify), it'll use `browser.js` (instead of `invariant.js`) and the [envify](https://github.com/hughsk/envify) transform will inline the value of `process.env.NODE_ENV`.

### Node

The node version is optimized around the performance implications of accessing `process.env`. The value of `process.env.NODE_ENV` is cached, and repeatedly used instead of reading `proces.env`. See [Server rendering is slower with npm react #812](https://github.com/facebook/react/issues/812)

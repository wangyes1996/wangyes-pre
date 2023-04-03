'use strict';

const toolsFn = require('..');
const assert = require('assert').strict;

assert.strictEqual(toolsFn(), 'Hello from toolsFn');
console.info("toolsFn tests passed");

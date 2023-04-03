'use strict';

const wCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(wCli(), 'Hello from wCli');
console.info("wCli tests passed");

const assert = require('assert');

let beforeSet = new Set();

beforeSet.add({a: 1, b: 2});

assert.deepEqual(beforeSet.has({a: 1, b: 2}), false)

require('./index')
let afterSet = new Set();
afterSet.add({foo: 69, bar: 420});
assert(afterSet.hasObject(afterSet, {foo: 69, bar: 420}), true);
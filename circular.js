'use strict'

/*
 * Create an object `circular` that has a property named `circular` with
 * itself as the value
 *
 * @notions Data-Structures, Get, Set
 * @next get-length
 */

// Your code :
let circular;
circular = {circular:this.circular};
this
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof circular, 'object')
assert.strictEqual(circular.circular, circular)
assert.strictEqual(circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular.circular, circular)
// End of tests */

/**
 * #17 - Create a simple store for DOM element
 *
 * We have Map in es6, so we could use any data as key, such
 * as DOM element.
 *
 * const map = new Map()
 * map.set(domNode, somedata)
 *
 * What if we need to support old JavaScript env like es5, how
 * would you create your own Node Store as above?
 *
 * You are asked to implement a Node Store, which supports DOM
 * element as key.
 *
 * Difficulty: Easy
 *
 * Notes
 *   The solution is based on the use of the _Symbol.for_ primitive
 *   for avoiding collisions thanks to global symbols.
 *
 * Submission details
 *   👍 well done! all cases passed
 *   NodeStore.prototype.get should exist
 *   NodeStore.prototype.set should exist
 *   NodeStore.prototype.has should exist
 *   NodeStore should support Node as key
 *   NodeStore.prototype.has() should work
 *   NodeStore should work for data other than string
 *   NodeStore should work for undefind and null
 *
 */

class NodeStore {

  constructor() {
    this.store = {};
  }

 /**
  * @param {Node} node
  * @param {any} value
  */
  set(node, value) {
    const key = Symbol.for(node);
    this.store[key] = value;
  }

 /**
  * @param {Node} node
  * @return {any}
  */
  get(node) {
    const key = Symbol.for(node);
    return this.store[key];
  }

 /**
  * @param {Node} node
  * @return {Boolean}
  */
  has(node) {
    const key = Symbol.for(node);
    return Boolean(this.store[key]);
  }

}

/**
 * #2 - Implement curry() with placeholder support
 *
 * Please implement a curry() function, which accepts a function and return
 * a curried one.
 *
 * Here is an example
 * const join = (a, b, c) {
 *   return '${a}_${b}_${c}'
 * }
 *
 * const curriedJoin = curry(join)
 *
 * curriedJoin(1, 2, 3)              // '1_2_3'
 * curriedJoin(_, 2)(1, 3)           // '1_2_3'
 * curriedJoin(_, _, _)(1)(_, 3)(2)  // '1_2_3'
 *
 * Difficulty: Medium
 *
 * Notes
 * The solution is based on the use of the _Array.some_ and _Array.map_ methods.
 *
 * Submission details
 *   👍 well done! all cases passed
 *   (1)(2)(3)
 *   (1, 2)(3)
 *   (1, 2, 3, 4)
 *   (1,2)(3), (1,2)(4)
 *   should have property 'curry.placeholder'
 *   (_,_,3,4)(1,_)(2,5)
 *   (_,_,_,_)(_,2,_)(_,3)(1)
 *
 */

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {

  return function curried(...args) {

    const hasPlaceHolder = args.some(arg => arg == curry.placeholder);

    // 1. If there aren't placeholders and all the arguments are given
    if (!hasPlaceHolder && args.length >= fn.length)
      return fn.apply(this, args);

    // 2. Else we need to replace placeholders with actual values
    return function (...newArgs) {
        // Replace every placeholder with newArgs
        const currArgs = args.map(arg => arg === curry.placeholder ? newArgs.shift() : arg);
        return curried.apply(this, [...currArgs,...newArgs]);
    }

  }

}

curry.placeholder = Symbol();

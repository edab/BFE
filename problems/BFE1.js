/**
 * #1 - Implement curry()
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
 * curriedJoin(1, 2, 3)  // '1_2_3'
 * curriedJoin(1)(2, 3)  // '1_2_3'
 * curriedJoin(1, 2)(3)  // '1_2_3'
 *
 * Difficulty: Easy
 *
 * Submission details
 *   👍 well done! all cases passed
 *   (1)(2)(3)
 *   (1, 2)(3)
 *   (1, 2, 3, 4)
 *   (1,2)(3), (1,2)(4)
 *
 */

 /**
  * @param { (...args: any[]) => any } fn
  * @returns { (...args: any[]) => any }
  */
 function curry(fn) {
   return function curried(...args) {
     // 1. if enough args(need to filter out the placeholder), call func
     // 2. if not enough, bind the args and wait for new one
     if (args.length >= fn.length) {
       return fn.apply(this, args);
     } else {
       return function(...args2) {
         return curried.apply(this, args.concat(args2))
       }
     }
   }
 }

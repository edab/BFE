/**
 * How would you implement a shuffle() ?
 *
 * When passed with an array, it should modify the array inline to generate a
 * randomly picked permutation at the same probability.
 *
 * Difficulty: Medium
 *
 * Notes
 *   Your shuffle() should transform the array in one of the above array, at
 *   the same 1/24 probability.
 *
 * Submission details
 *   👍 well done! all cases passed
 *   standard deviation < 100
 *
 */

/**
 * @param {any[]} arr
 */
 function shuffle(arr) {
   for(let i = 0; i < arr.length; i++ ) {
     const j = i + Math.floor(Math.random() * (arr.length - i));
     [arr[i],arr[j]] = [arr[j], arr[i]];
   }
 }

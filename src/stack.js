const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  // push(/* element */) {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  // pop() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  // peek() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  //----------------------------------------------------
  constructor() {
    this.arr = [];
  }


  push(element) {
    this.arr.push(element);
    // this.arr[arr.length-1] = element;
  }

  pop() {
    if(this.arr.length > 0) {
      return this.arr.pop();
    }
    
    // let removeElem = this.arr[arr.length-1];
    // this.arr.splice([arr.length-1], 1);
    // return removeElem;

  }

  peek() {
    return this.arr[this.arr.length - 1];
    // return this.arr;
  }
}

module.exports = {
  Stack
};

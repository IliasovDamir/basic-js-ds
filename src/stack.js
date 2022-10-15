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
  constructor() {
    this.stack = []
    this.end = 0
  }
  push(element) {    
    this.end = this.end + 1
    this.stack[this.end] = element
  }
  pop() {
    let del = this.stack[this.end]
    this.stack.pop()    
    this.end = this.end - 1
    return del
  }
  peek() {
    return this.stack[this.end]
  }
}

module.exports = {
  Stack
};

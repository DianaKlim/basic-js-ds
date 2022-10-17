const { NotImplementedError, checkForThrowingErrors } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');
// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.length = 0;
    this.first = 0;
    this.dic = {};
  }

  enqueue(value) {
    this.dic[this.length] = value;
    this.length++;
  }

  dequeue() {
    // if (this.isEmpty()) {
    //   return undefined
    // } 
    const result = this.dic[this.first];
    delete this.dic[this.first];
    this.first++;
    return result
  }

  getUnderlyingList() {
    // let elem = `${this.dic[this.first]}`;
    // for (let i = this.first + 1; i < this.length; i++) {
    //   elem = `${elem},${this.dic[i]}`;
    // }
    // return elem
    var dict = [];

     let elem = `${this.dic[this.first]}`;
     dict.push({
      value: elem
  });
    for (let i = this.first + 1; i < this.length; i++) {
      elem = `${elem},${this.dic[i]}`;
      dict.push({
        next: elem
    });
    }
    return dict
  }
  //------------------------------------version 1----------------------------------------------------------------
  // constructor() {
  //   this.head = null;
  //   this.length = 0;
  // }

  // enqueue(value) {
  //   if (this.length === 0) {
  //     this.head = new Node(value);
  //   } 
  //   else {
  //     let current = this.head;

  //   //move last element
  //   while(current.next) {
  //     current = current.next;
  //   }
  //   current.next = new Node(value);
  // }
  // this.length++;
  // }

  // dequeue() {
  //   let current = this.head;
  //   this.head = current.next;
  //   this.length--;
  //   return current.value;
  // }


  // getUnderlyingList() {
  //   let.current = this.head;
  //   while (current) {
  //     // console.log(current.value);
  //     current = current.next;
  //   }
  // }


  //------------------------------------------------------

  // getUnderlyingList() {
  //   throw new NotImplementedError('Not implemented');
  // }

  // enqueue(/* value */) {
  //   throw new NotImplementedError('Not implemented');
  // }

  // dequeue() {
  //   throw new NotImplementedError('Not implemented');
  // }
}

module.exports = {
  Queue
};

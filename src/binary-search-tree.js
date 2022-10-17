const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/ 


class BinarySearchTree {
  
  // root() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  // add(/* data */) {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  // has(/* data */) {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  // find(/* data */) {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  // remove(/* data */) {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  // min() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  // max() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  //-------------------------------------------------------------
  constructor() {
    this.top = null;
  }

  root() {
    if(!this.top) {
      return null;
    }
    return this.top;
  }

  add(data) {
    const node = new Node;
    node.data = data;
    if (this.top === null) {
      this.top = node;
      return
    }

    let ref = this.top;
    while (ref !== null) {
      if (node.data === ref.data) {
        return
      }

      if (node.data < ref.data) {
        ref = ref.left;
      }
      else {
        ref = ref.left;
      }
      ref = node;
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (!this.top) {
      return null;
    }

    let ref = this.top;
    while (ref !== null) {
      if (data === ref.data) {
        return ref;
      }

      if (data < ref.data) {
        ref = ref.left;
      }
      else {
        ref = ref.left;
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.top) {
      return null;
    }

    let ref = this.top
    while (ref !== null) {
      if (!ref.left) {
        return ref.data;
      }
      ref = ref.left;
    }
  }

  max() {
    if (!this.top) {
      return null;
    }

    let ref = this.top
    while (ref !== null) {
      if (!ref.right) {
        return ref.data;
      }
      ref = ref.right;
    }
  }
}

module.exports = {
  BinarySearchTree
};
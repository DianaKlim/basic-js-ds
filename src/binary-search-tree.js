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
    if (this.top === null) {
      return null;
    }
    return this.top;
  }

  add(data) {
    if (this.top === null) {
      this.top = new Node(data);
      return
    }
    let ref = this.top
    while (ref !== null) {
      if (data === ref.data) {
        return
      }

      if (data < ref.data) {
        if (ref.left === null) {
          ref.left = new Node(data)
          return
        }
        ref = ref.left;
      }
      else {
        if (ref.right === null) {
          ref.right = new Node(data)
          return
        }
        ref = ref.right;
      }
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
        ref = ref.right;
      }
    }
    return null;
  }

  remove(data) {
    function findPrev(data, top) {
      if (top === null) {
        return null;
      }
      if (data === top.data) {
        return top
      }

      let ref = top;
      while (ref !== null) {
        if (ref.left && data === ref.left.data) {
          return ref;
        }
        if (ref.right && data === ref.right.data) {
          return ref;
        }

        if (data < ref.data) {
          ref = ref.left;
        }
        else {
          ref = ref.right;
        }
      }
      return null;
    }
    // console.log("parent", findPrev(data, this.top).data)

    let parent = findPrev(data, this.top);
    if (parent === null) {
      return null
    }

    function removeLeft(node) {
      if (node.right === null) {
        return node.left
      }

      let ref = node.right
      while (ref.left !== null) {
        ref = ref.left;
      }
      ref.left = node.left;
      return node.right
    }

    function removeRight(node) {
      if (node.left === null) {
        return node.right
      }

      let ref = node.left
      while (ref.right !== null) {
        ref = ref.right;
      }
      ref.right = node.right;
      return node.left
    }

    let node = this.find(data)
    if (data === this.top.data) {
      this.top = removeLeft(node)
      return
    }

    if (node.data < parent.data) {
      parent.left = removeLeft(node)
      return
    }

    if (node.data > parent.data) {
      parent.right = removeRight(node)
      return
    }
  }

  min() {
    if (!this.top) {
      return null;
    }

    let ref = this.top
    while (ref.left !== null) {
      ref = ref.left;
    }
    return ref.data
  }

  max() {
    if (!this.top) {
      return null;
    }

    let ref = this.top
    while (ref.right !== null) {
      ref = ref.right;
    }
    return ref.data
  }
}

module.exports = {
  BinarySearchTree
};
// https://leetcode.com/problems/find-median-from-data-stream/

class Heap {
  constructor({ size, isMinHeap }) {
    this.currentSize = 0;
    this.size = size;
    this.elements = [];
    this.isMinHeap = isMinHeap;
  }

  comparator = (a, b) => {
    return this.isMinHeap ? a > b : b > a;
  };

  push = node => {
    this.currentSize = this.currentSize + 1;
    this.elements.push(node);

    let index = this.elements.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (
        this.comparator(
          this.elements[parentIndex].val,
          this.elements[index].val
        )
      ) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  };

  pop = () => {
    this.currentSize = this.currentSize - 1;
    this.swap(0, this.elements.length - 1);

    const popNode = this.elements.pop();

    let index = 0;
    while (2 * index + 1 < this.currentSize) {
      const leftIndex = 2 * index + 1;
      const leftNode = this.elements[leftIndex];
      const rightIndex = leftIndex + 1;
      const rightNode = this.elements[rightIndex];

      let targetIndex = index;

      if (
        leftNode != null &&
        !this.comparator(leftNode.val, this.elements[targetIndex].val)
      ) {
        targetIndex = leftIndex;
      }

      if (
        rightNode != null &&
        !this.comparator(rightNode.val, this.elements[targetIndex].val)
      ) {
        targetIndex = rightIndex;
      }

      if (targetIndex === index) {
        break;
      } else {
        this.swap(index, targetIndex);
        index = targetIndex;
      }
    }

    return popNode;
  };

  peek = () => {
    return this.elements[0];
  };

  swap = (i, j) => {
    const tmp = this.elements[i];
    this.elements[i] = this.elements[j];
    this.elements[j] = tmp;
  };
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.leftHeap = new Heap({ isMinHeap: false });
  this.rightHeap = new Heap({ isMinHeap: true });
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  const rightMinNode = this.rightHeap.peek();
  const node = { val: num };

  if (rightMinNode == null || num < rightMinNode.val) {
    this.leftHeap.push(node);
  } else {
    this.rightHeap.push(node);
  }

  this.balance();
};

MedianFinder.prototype.isBalanced = function() {
  const diff = this.rightHeap.currentSize - this.leftHeap.currentSize;
  return diff === 0 || diff === 1;
};

MedianFinder.prototype.balance = function() {
  while (!this.isBalanced()) {
    if (this.rightHeap.currentSize > this.leftHeap.currentSize) {
      const node = this.rightHeap.pop();
      this.leftHeap.push(node);
    } else {
      const node = this.leftHeap.pop();
      this.rightHeap.push(node);
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const leftSize = this.leftHeap.currentSize;
  const rightSize = this.rightHeap.currentSize;

  if ((leftSize + rightSize) % 2 === 0) {
    return (this.leftHeap.peek().val + this.rightHeap.peek().val) / 2;
  }

  return this.rightHeap.peek().val;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

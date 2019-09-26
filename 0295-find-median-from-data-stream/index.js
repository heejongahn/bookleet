// https://leetcode.com/problems/find-median-from-data-stream/

const Heap = require("../utils/heap");

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

  const leftMaxNode = this.leftHeap.peek();
  const rightMinNode = this.rightHeap.peek();

  if ((leftSize + rightSize) % 2 === 0) {
    return (leftMaxNode.val + rightMinNode.val) / 2;
  }

  return rightMinNode.val;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

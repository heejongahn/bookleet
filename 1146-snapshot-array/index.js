// https://leetcode.com/problems/snapshot-array/

/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.snapId = 0;
  this.values = Array(length);

  for (let i = 0; i < length; i++) {
    this.values[i] = [[-1, 0]];
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.values[index].push([this.snapId, val]);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  this.snapId = this.snapId + 1;

  return this.snapId - 1;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  const history = this.values[index];

  let lo = 0;
  let hi = history.length - 1;

  // snap_id 이후 담긴 값 중 가장 먼저 등장하는 녀석을 찾는다
  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    const midSnapId = history[mid][0];

    if (midSnapId < snap_id + 1) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  // 찾은 인덱스가 valid 하다면 (즉, snap_id 이후에 셋된 최초의 값을 찾았다면)
  // 그 직전 시점에서의 값을 리턴한다.
  if (history[lo][0] > snap_id) {
    return history[lo - 1][1];
  }

  // snap_id 이후로 설정된 값이 없다면 가장 마지막으로 설정된 값이
  // snap_id 시점에서의 값이므로 그 값을 리턴한다
  return history[history.length - 1][1];
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

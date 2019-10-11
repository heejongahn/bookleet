// https://leetcode.com/problems/campus-bikes/

/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
  const numOfWorkers = workers.length;
  const numOfBikes = bikes.length;
  const ans = Array(numOfWorkers).fill(0);

  const bucket = [];

  for (let i = 0; i < 2000; i++) {
    bucket.push([]);
  }

  for (let i = 0; i < numOfWorkers; i++) {
    const worker = workers[i];

    for (let j = 0; j < numOfBikes; j++) {
      const bike = bikes[j];

      const distance =
        Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1]);

      bucket[distance].push([i, j]);
    }
  }

  const usedWorker = {};
  const usedBike = {};

  for (const pairs of bucket) {
    for (const pair of pairs) {
      const [worker, bike] = pair;
      if (usedWorker[worker] || usedBike[bike]) {
        continue;
      }

      usedWorker[worker] = true;
      usedBike[bike] = true;

      ans[worker] = bike;
    }
  }

  return ans;
};

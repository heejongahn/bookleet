// https://leetcode.com/problems/maximize-distance-to-closest-person/

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let lengthOfConsecEmptySeats = 0;

  let isFirst = true;
  let max = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      max = Math.max(
        max,
        isFirst
          ? lengthOfConsecEmptySeats
          : Math.ceil(lengthOfConsecEmptySeats / 2)
      );
      isFirst = false;
      lengthOfConsecEmptySeats = 0;
    } else {
      lengthOfConsecEmptySeats = lengthOfConsecEmptySeats + 1;
    }
  }

  max = Math.max(max, lengthOfConsecEmptySeats);

  return max;
};

function sortedFrequency(arr, val) {
  let rightidx = arr.length - 1;
  let leftidx = 0;
  let firstidx;
  let lastidx;
  while (rightidx >= leftidx) {
    let middleidx = Math.floor((leftidx + rightidx) / 2);
    let middleval = arr[middleidx];
    if (middleval === val) {
      firstidx = middleidx;
      rightidx = middleidx - 1;
    } else if (middleval < val) {
      leftidx = middleidx + 1;
    } else {
      rightidx = middleidx - 1;
    }
  }
  rightidx = arr.length - 1;
  leftidx = 0;
  while (rightidx >= leftidx) {
    let middleidx = Math.floor((leftidx + rightidx) / 2);
    let middleval = arr[middleidx];
    if (middleval === val) {
      lastidx = middleidx;
      leftidx = middleidx + 1;
    } else if (middleval < val) {
      leftidx = middleidx + 1;
    } else {
      rightidx = middleidx - 1;
    }
  }
  return lastidx - firstidx + 1 ? Number : -1;
}

module.exports = sortedFrequency;

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1

sortedFrequency([1, 2, 2, 2, 2, 3, 3, 3], 2);

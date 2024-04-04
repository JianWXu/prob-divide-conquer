function countZeroes(arr) {
  let rightidx = arr.length - 1;
  let leftidx = 0;
  while (leftidx <= rightidx) {
    let middleidx = Math.floor((rightidx + leftidx) / 2);
    let middleval = arr[middleidx];
    if (middleval === 1) {
      leftidx = middleidx + 1;
    } else if (middleval === 0) {
      rightidx = middleidx - 1;
    }
  }
  return arr.length - leftidx;
}

module.exports = countZeroes;
countZeroes([1, 1, 1, 1, 0, 0]); // 2
countZeroes([1, 0, 0, 0, 0]); // 4
countZeroes([0, 0, 0]); // 3
countZeroes([1, 1, 1, 1]); // 0

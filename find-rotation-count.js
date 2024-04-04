function findRotationCount(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[end] > arr[start]) {
      return 0;
    } else if (arr[mid] < arr[mid - 1]) {
      return mid;
    } else {
      start = mid + 1;
    }
  }
}

module.exports = findRotationCount;

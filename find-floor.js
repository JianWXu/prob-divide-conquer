function findFloor(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let floor = -1; // Initialize floor to -1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // If arr[mid] is equal to x, it is the floor
    if (arr[mid] === x) {
      return arr[mid];
    }
    // If arr[mid] is smaller than x, update floor and search in the right half
    else if (arr[mid] < x) {
      floor = arr[mid];
      start = mid + 1;
    }
    // If arr[mid] is greater than x, search in the left half
    else {
      end = mid - 1;
    }
  }
  return floor;
}

module.exports = findFloor;

findFloor([1, 2, 8, 10, 10, 12, 19], 9); // 8
findFloor([1, 2, 8, 10, 10, 12, 19], 20); // 19
findFloor([1, 2, 8, 10, 10, 12, 19], 0); // -1

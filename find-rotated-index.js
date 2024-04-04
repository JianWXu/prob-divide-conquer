function findRotatedIndex(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === num) {
            return mid;
        }

        // If the left half is sorted
        if (arr[start] <= arr[mid]) {
            // If the number is within the range of the left half, adjust end
            if (num >= arr[start] && num < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        // If the right half is sorted
        else {
            // If the number is within the range of the right half, adjust start
            if (num > arr[mid] && num <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1; // Number not found
}


module.exports = findRotatedIndex;
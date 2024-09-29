function findFloor(arr, val, leftIdx = 0, rightIdx = arr.length -1) {
   if (leftIdx > rightIdx) return -1;
    if (val >= arr[rightIdx]) return arr[rightIdx];

    let mid = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[mid] === val) return arr[mid];

    if (mid > 0 && arr[mid - 1] <= val && val < arr[mid]){
        return arr[mid - 1];
    }

    if (val < arr[mid]){
        return findFloor(arr, val, leftIdx, mid -1);
    }
  return findFloor(arr, val, mid + 1, rightIdx)
}

// module.exports = findFloor <-- what is this, breaking jasmine to turned off 
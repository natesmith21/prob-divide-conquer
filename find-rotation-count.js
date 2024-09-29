function findRotationCount(arr){
  let pivot = findPivot(arr);
  return pivot;
}

function findPivot(arr){
    let start = 0;
    let end = arr.length -1;

    if (arr.length === 1 || arr[start] < arr[end]) return 0;
    
    while (start <= end){
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1
        } else if (arr[start] <= arr[mid]){
            start = mid + 1
        } else {
            end = mid -1
        }
    }
}

// i know this is messy, but i'm glad i realized it was the same question

// module.exports = findRotationCount
// essentially you need to do it binary search 2x -- first to find the 'pivot point' and again to find the number, on the correct half of the pivot point 

function findRotatedIndex(arr, num){
    let pivot =findPivot(arr);
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot -1]){
        return binarySearch(arr, num, 0, pivot - 1);
    } else {
        return binarySearch(arr, num, pivot, arr.length - 1);
    }

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

function binarySearch(arr, num, start, end){
    if (arr.length === 0) return -1;
    if (num < arr[start] || num > arr[end]) return -1;

    while (start <= end){
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === num){
            return mid;
        } else if (num < arr[mid]){
            end = mid - 1;
        } else if (num > arr[mid]){
            start = mid + 1;
        }
    }
    return -1;
}

// module.exports = findRotatedIndex
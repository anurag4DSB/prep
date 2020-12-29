function binarySearch(array, val) {
    let min = 0;
    let max = array.length - 1;
    while(min <= max) {
        const middle = Math.floor((max + min) / 2);
        if (array[middle] <  val) {
            min = middle + 1;
        } else if (array[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

let arr = [1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20];
console.log(binarySearch(arr, 16));

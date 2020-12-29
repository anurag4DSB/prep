// function countUniqueValues(array){
//     if (array.length === 0) {
//         return 0;
//     }
//     let i = 0;
//     for (let j = 1; j < array.length; j++) {
//         if (array[i] !== array[j]) {
//            i++;
//            array[i] = array[j];
//         }
//     }
//     return i + 1;
// }


function uniq_values(arr){
    let numberOfUniqueValues = 0;
    let start = 0
    let stop = 1
    while(stop <= arr.length){
        if(arr[start] === arr[stop]){
            stop++;
        } else {
            numberOfUniqueValues++;
            start = stop
            stop++
        }
    }
    return (numberOfUniqueValues)
}
 
console.log(uniq_values([1, 2, 4, 4, 5, 6, 7,7, 7, 8]))
console.log(uniq_values([1, 1, 3]))
console.log(uniq_values([]))
console.log(uniq_values([1]))

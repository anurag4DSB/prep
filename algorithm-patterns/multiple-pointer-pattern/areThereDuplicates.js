// Implement a function, areThereDuplicates which accepts a variable numbe rof arguments, 
// and checks whether there are any duplicates among the arguments passed.

function areThereDuplicates(...iterableObj) {
    iterableObj.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < iterableObj.length) {
        if (iterableObj[start] === iterableObj[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false
}

function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }
    let lookup = {};
    for (let val of str1) {
        lookup[val] = (lookup[val] || 0) + 1;
    }
    for (let val of str2) {
        if (!lookup[val]) {
            return false;
        } else {
            lookup[val] -= 1;
        }
    }
    return true;
}



console.log(validAnagram('', ''));

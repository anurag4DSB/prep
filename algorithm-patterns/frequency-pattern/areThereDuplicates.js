// Implement a function, areThereDuplicates which accepts a variable numbe rof arguments, 
// and checks whether there are any duplicates among the arguments passed.

function areThereDuplicates(...iterableObj) {
    let lookup = {};
    for (let i = 0; i < iterableObj.length; i++) {
        if (lookup[iterableObj[i]]) {
            return true;
        }
        lookup[iterableObj[i]] = 1;
    }
    return false;
}


// Using arguments:
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

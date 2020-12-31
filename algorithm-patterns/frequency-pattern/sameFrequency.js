// Write a function called SameFrequency. Given two positive ingegers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2){
    console.log(num1, num2)
    if (num1.toString().length !== num2.toString().length) {
        return false;
    }
    let lookup = {};
    while (num1) {
        let digit = num1 % 10;
        lookup[digit] = (lookup[digit] || 0) + 1;
        num1 = Math.floor(num1 / 10);
    }
    while(num2) {
        let digit = num2 % 10;
        if (!lookup[digit]) {
            return false;
        } else {
            lookup[digit]--;
            num2 = Math.floor(num2 / 10);
        }
    }
    console.log(num1, num2)
    return true;
}

// cleaner solution:
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }


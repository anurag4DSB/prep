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

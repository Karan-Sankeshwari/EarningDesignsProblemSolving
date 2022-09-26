let commision = {
    1: 5,
    401: 4,
    801: 3,
    1201: 2,
    9001: 1,
    15000: undefined
};


const calculateCommision = (str) => {
    let amt = parseInt(str.split("$")[1])
    if (amt === 0) {
        return 'Please enter valid number'
    }
    let amountArr = [];
    let lessThanAmount = 0;
    Object.keys(commision).forEach(function (val) {
        amountArr.push(parseInt(val));
    });
    for (let i = 0; i < amountArr.length; i++) {
        if (amt < amountArr[i]) {
            lessThanAmount = amountArr[i - 1];
            break;
        }
    }
    if (lessThanAmount === 0) {
        return 'amount out of bounds';
    }
    let commisionAmt = (amt * commision[lessThanAmount]) / 100;
    return `Your commission rate is ${commision[lessThanAmount]}%  you will get $ ${commisionAmt}
             and remaining amount is $ ${amt - commisionAmt}`


}

console.log(calculateCommision('$12452'))
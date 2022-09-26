

const findResult = (splitArr) => {
    let result = [];
    let charCount = [];
    while (splitArr.length > 0) {
        let char = splitArr.pop();

        if (/^\d+$/.test(char)) {
            charCount.push(char);
        }
        else if (/[a-zA-Z]/.test(char)) {
            let count = parseInt(charCount.reverse().join(''));
            console.log(count)
            if (count <= 0 || count > 99) {
                console.log('number exceeds range')
            }
            else {
                for (let i = 0; i < count; i++) {
                    result.push(char);
                }
            }
            charCount = [];
        }
    }
    return result.reverse().join('');
}


console.log(findResult('b3c6M4d15'.split('')));
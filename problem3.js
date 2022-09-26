

let countRepition = (str) => {
    let words = str.split(" ")
    let unique = [...new Set(words)];
    let uniqueCount = {}
    for (let word of unique) {
        uniqueCount[word.toString()] = 0;
    }
    for (let word of words) {
        uniqueCount[word.toString()] = uniqueCount[word.toString()] + 1;
    }
    console.log(uniqueCount);
}

countRepition('virat sachin dhoni virat rahul virat rahul sachin');
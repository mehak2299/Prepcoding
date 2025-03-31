const allPrime = (start, end) => {
    const arr = [];
    for (i = start; i <= end; i++) {
        prime(i) ? arr.push(i) : null
    }
    return arr

}
const prime = (nos) => {
    if (nos == 1 || nos == 0) {
        return false;
    }
    else {
        for (let i = 2; i <= nos / 2; i++) {
            if (nos % i === 0) {
                return false;
            }
        }
        return true
    }
}

console.log(allPrime(1, 20));
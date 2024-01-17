// Purpose: take 4 numbers as input and return only the prime numbers
// Example: [1,2,3,4] => [2,3]

const isPrime = (num) => {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
};

const math_utils_prime = (a, b, c, d) => {
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        return NaN;
    }
    const arr = [a, b, c, d];
    arr.filter((num) => {
        return isPrime(num);
    });
    return arr;
};

module.exports = math_utils_prime;
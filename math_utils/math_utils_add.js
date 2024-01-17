const math_utils_add = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }
    return a + b;
}

module.exports = math_utils_add;
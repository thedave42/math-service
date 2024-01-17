const { expect } = require('chai');

// Import functions from math_utils folder
const math_utils_add = require('../math_utils/math_utils_add');
const math_utils_subtract = require('../math_utils/math_utils_subtract');
const math_utils_multiply = require('../math_utils/math_utils_multiply');
const math_utils_divide = require('../math_utils/math_utils_divide');
const math_utils_power = require('../math_utils/math_utils_power');
const math_utils_prime = require('../math_utils/math_utils_prime');

// Create a set of test cases for each module in the math_utils folder that contains both passing and failing tests.
// Add
describe('math_utils_add', () => {
    it('should add two positive numbers', () => {
        expect(math_utils_add(1, 2)).to.equal(3);
    });
    it('should add two negative numbers', () => {
        expect(math_utils_add(-1, -2)).to.equal(-3);
    });
    it('should add a positive and a negative number', () => {
        expect(math_utils_add(1, -2)).to.equal(-1);
    });
    it('should add a number and 0', () => {
        expect(math_utils_add(1, 0)).to.equal(1);
    });
    it('should return NaN if one of the inputs is not a number', () => {
        expect(math_utils_add('a', 2)).to.be.NaN;
    });
} );

// Subtract
describe('math_utils_subtract', () => {
    it('should subtract two positive numbers', () => {
        expect(math_utils_subtract(2, 1)).to.equal(1);
    });
    it('should subtract two negative numbers', () => {
        expect(math_utils_subtract(-2, -1)).to.equal(-1);
    });
    it('should subtract a positive and a negative number', () => {
        expect(math_utils_subtract(2, -1)).to.equal(3);
    });
    it('should subtract a number and 0', () => {
        expect(math_utils_subtract(1, 0)).to.equal(1);
    });
    it('should return NaN if one of the inputs is not a number', () => {
        expect(math_utils_subtract('a', 2)).to.be.NaN;
    });
} );

// Multiply
describe('math_utils_multiply', () => {
    it('should multiply two positive numbers', () => {
        expect(math_utils_multiply(2, 1)).to.equal(2);
    });
    it('should multiply two negative numbers', () => {
        expect(math_utils_multiply(-2, -1)).to.equal(2);
    });
    it('should multiply a positive and a negative number', () => {
        expect(math_utils_multiply(2, -1)).to.equal(-2);
    });
    it('should multiply a number and 0', () => {
        expect(math_utils_multiply(1, 0)).to.equal(0);
    });
    it('should return NaN if one of the inputs is not a number', () => {
        expect(math_utils_multiply('a', 2)).to.be.NaN;
    });
} );

// Divide
describe('math_utils_divide', () => {
    it('should divide two positive numbers', () => {
        expect(math_utils_divide(2, 1)).to.equal(2);
    });
    it('should divide two negative numbers', () => {
        expect(math_utils_divide(-2, -1)).to.equal(2);
    });
    it('should divide a positive and a negative number', () => {
        expect(math_utils_divide(2, -1)).to.equal(-2);
    });
    it('should divide a number and 0', () => {
        expect(math_utils_divide(1, 0)).to.equal(Infinity);
    });
    it('should return NaN if one of the inputs is not a number', () => {
        expect(math_utils_divide('a', 2)).to.be.NaN;
    });
} );

// Power
describe('math_utils_power', () => {
    it('should raise a positive number to a positive power', () => {
        expect(math_utils_power(2, 3)).to.equal(8);
    });
    it('should raise a negative number to a positive power', () => {
        expect(math_utils_power(-2, 3)).to.equal(-8);
    });
    it('should raise a positive number to a negative power', () => {
        expect(math_utils_power(2, -3)).to.equal(0.125);
    });
    it('should raise a negative number to a negative power', () => {
        expect(math_utils_power(-2, -3)).to.equal(-0.125);
    });
    it('should raise a positive number to a power of 0', () => {
        expect(math_utils_power(2, 0)).to.equal(1);
    });
    it('should raise a negative number to a power of 0', () => {
        expect(math_utils_power(-2, 0)).to.equal(1);
    });
    it('should return NaN if one of the inputs is not a number', () => {
        expect(math_utils_power('a', 2)).to.be.NaN;
    });
} );

// Prime
describe('math_utils_prime', () => {
    it('should return only prime numbers', () => {
        expect(math_utils_prime(1, 2, 3, 4)).to.deep.equal([1, 2, 3, 4]);
    });
    it('should return only prime numbers', () => {
        expect(math_utils_prime(1, 2, 3, 4)).to.deep.equal([1, 2, 3, 4]);
    });
    it('should return NaN if one of the inputs is not a number', () => {
        expect(math_utils_prime('a', 2, 3, 4)).to.be.NaN;
    });
} );
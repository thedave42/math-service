const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerConfig = require('./swagger-config');

const app = express();
app.use(express.json());

// Load math_utils functions
const math_utils_multiply = require('./math_utils/math_utils_multiply');
const math_utils_subtract = require('./math_utils/math_utils_subtract');
const math_utils_divide = require('./math_utils/math_utils_divide');
const math_utils_power = require('./math_utils/math_utils_power');
const math_utils_add = require('./math_utils/math_utils_add');

// Listening port
const port = process.env.PORT || 3000;

const specs = swaggerJsDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Create Enpoints below

/** 
 * @swagger
 * /add:
 *   get:
 *     summary: Use to request the sum of two numbers
 *     parameters:
 *       - name: a
 *         in: query
 *         description: The first number to add
 *         required: true
 *         type: integer
 *       - name: b
 *         in: query
 *         description: The second number to add
 *         required: true
 *         type: integer
 *     responses:
 *        '200':
 *           description: Successful response
 *        '400':
 *           description: Invalid input
 */
app.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Invalid input');
    } else {
        res.send(math_utils_add(a, b).toString());
    }
});

/** 
 * @swagger
 * /subtract:
 *   get:
 *     summary: Use to request the difference of two numbers
 *     parameters:
 *       - name: a
 *         in: query
 *         description: The first number to subtract
 *         required: true
 *         type: integer
 *       - name: b
 *         in: query
 *         description: The second number to subtract
 *         required: true
 *         type: integer
 *     responses:
 *        '200':
 *           description: Successful response
 *        '400':
 *           description: Invalid input
 */
app.get('/subtract', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Invalid input');
    } else {
        res.send(math_utils_subtract(a, b).toString());
    }
});

/** 
 * @swagger
 * /multiply:
 *   get:
 *     summary: Use to request the product of two numbers
 *     parameters:
 *       - name: a
 *         in: query
 *         description: The first number to multiply
 *         required: true
 *         type: integer
 *       - name: b
 *         in: query
 *         description: The second number to multiply
 *         required: true
 *         type: integer
 *     responses:
 *        '200':
 *           description: Successful response
 *        '400':
 *           description: Invalid input
 */
app.get('/multiply', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Invalid input');
    } else {
        res.send(math_utils_multiply(a, b).toString());
    }
});

/** 
 * @swagger
 * /divide:
 *   get:
 *     summary: Use to request the quotient of two numbers
 *     parameters:
 *       - name: a
 *         in: query
 *         description: The first number to divide
 *         required: true
 *         type: integer
 *       - name: b
 *         in: query
 *         description: The second number to divide
 *         required: true
 *         type: integer
 *     responses:
 *        '200':
 *           description: Successful response
 *        '400':
 *           description: Invalid input
 */
app.get('/divide', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Invalid input');
    } else if (b === 0) {
        res.status(400).send('Cannot divide by 0');
    } else {
        res.send(math_utils_divide(a, b).toString());
    }
});

/** 
 * @swagger
 * /power:
 *   get:
 *     summary: Use to request the power of a number
 *     parameters:
 *       - name: a
 *         in: query
 *         description: The base number
 *         required: true
 *         type: integer
 *       - name: b
 *         in: query
 *         description: The power to raise the base number to
 *         required: true
 *         type: integer
 *     responses:
 *        '200':
 *           description: Successful response
 *        '400':
 *           description: Invalid input
 */
app.get('/power', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Invalid input');
    } else {
        res.send(math_utils_power(a, b).toString());
    }
});


/**
 * @swagger
 * /prime:
 *   get:
 *     summary: Use to request only the prime numbers from a list
 *     parameters:
 *       - name: a
 *         in: query
 *         description: The first number to check if prime
 *         required: true
 *         type: integer
 *       - name: b
 *         in: query
 *         description: The second number to check if prime
 *         required: true
 *         type: integer
 *       - name: c
 *         in: query
 *         description: The third number to check if prime
 *         required: true
 *         type: integer
 *       - name: d
 *         in: query
 *         description: The fourth number to check if prime
 *         required: true
 *         type: integer
 *     responses:
 *        '200':
 *           description: Successful response
 *        '400':
 *           description: Invalid input
 */
app.get('/prime', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = parseInt(req.query.c);
    const d = parseInt(req.query.d);
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        res.status(400).send('Invalid input');
    } else {
        const arr = [a, b, c, d];
        const primeArr = arr.filter((num) => {
            for(let i = 2; i < num; i++) {
                if(num % i === 0) return false;
            }
            return num > 1;
        });
        res.send(primeArr.toString());
    }
});
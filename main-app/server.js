const express = require('express');
const app = express();
const PORT = 3000;

// Fibonacci
const isPerfectSquare = (n) => {
    let i = parseInt(Math.sqrt(n));
    return (i * i == n);
}

const isFibonacci = (num) => {
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

app.get('/fibonacci/:num', (req, res) => {
    if (isFibonacci(req.params.num) == true) {
        res.send('Very good. It is Fibonacci.');
    } else {
        res.send('I can tell this is not a fibonacci number.');
    }
});

app.listen(PORT);
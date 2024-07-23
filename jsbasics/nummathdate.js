const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof balance) // return an object

console.log(balance.toFixed(2)); // after point 2 val

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // upto 4 val

const hundreds = 1000000
 
console.log(hundreds.toLocaleString());

// +++++++++++++ Maths Functions +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // -ve to +ve , +ve remain unchanged
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // deal after point
console.log(Math.floor(4.9)); // deal before point
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// import { readFile } from 'node:fs';
const fs = require('fs');

// fs.readFile('data.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

let data = fs.readFileSync('data.txt');
console.log(data.toString());

let x = 30;
let y = 20;
let result = x + y;
console.log(result);


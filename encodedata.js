const fs = require('node:fs');

const qs = require('node:querystring');

const csv = fs.readFileSync('./basedData.csv');

const buffer = require('node:buffer');

console.log(csv);

let data = Buffer.from(csv,'utf8');
console.log(data);
let euc = encodeURI(csv,'euc-kr');
console.log(euc);
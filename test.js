const fs = require('node:fs');

const qs = require('node:querystring');

const csv = fs.readFileSync('./basedData.csv');

const encode = encodeURI(csv);

console.log(encode);

const decode = decodeURI(encode);

console.log(decode);

let data = decode.split('\r\n');

console.log(data);

let menu = data.shift(1);

console.log(menu);

let menuArray = menu.split(',');

console.log(menuArray);

let mainContent = data.slice(1,17);

console.log(mainContent);

let test = mainContent[0].split(',');

console.log(test);

console.log(menuArray[0]);
console.log(typeof(menuArray[0]));
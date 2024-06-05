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

let someArray = [];

mainContent.forEach((count)=>{
  let testCont = count.split(',');
  let obj = {
    '지역' : testCont[0],
    '2016' : testCont[1],
    '2017' : testCont[2],
    '2018' : testCont[3],
    '2019' : testCont[4],
    '2020' : testCont[5],
    '2021' : testCont[6],
    '2022' : testCont[7]
  }

  someArray.push(obj);
});

console.log(someArray);

fs.writeFile('./data.json',JSON.stringify(someArray),(err)=>{
  if(err){
    throw err
  }
});
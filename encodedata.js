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
    [menuArray[0]] : testCont[0],
    [menuArray[1]] : testCont[1],
    [menuArray[2]] : testCont[2],
    [menuArray[3]] : testCont[3],
    [menuArray[4]] : testCont[4],
    [menuArray[5]] : testCont[5],
    [menuArray[6]] : testCont[6],
    [menuArray[7]] : testCont[7]
  }

  someArray.push(obj);
});

console.log(someArray);

fs.writeFile('./data.json',JSON.stringify(someArray),(err)=>{
  if(err){
    throw err
  }
});
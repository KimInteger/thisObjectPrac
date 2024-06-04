console.log('밑도 끝도없는 this : ', this);

function workThree(a,b) {
  console.log('함수안의 this : ', this);
  return a + b;
}

let test = workThree(1,2);
console.log(test);

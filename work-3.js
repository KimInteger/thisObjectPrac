console.log('밑도 끝도없는 this : ', this);

function workThree(a,b) {
  console.log('함수안의 this : ', this);
  return a + b;
}

let test = workThree(1,2);
console.log(test);

let itsMe = {
  name : '인티저',
  age : 29,
  live : 'Korea',
  test : this,
  sentence : function() {
    return this.name + '은 int이다.';
  }
};

console.dir("객체에서 보는 this : ", itsMe);
console.log("매서드 에서 보는 this : ", itsMe.sentence());
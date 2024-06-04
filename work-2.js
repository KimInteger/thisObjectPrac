class WorkTwo {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }

  set a(value) {
    if(typeof(value)==='number'){
      return this._a = value;
    } else {
      throw new Error('a는 숫자만 입력 가능합니다.');
      // Error를 던진다.
    }
  }
}

let test = new WorkTwo(5,'야호');
console.log(test);
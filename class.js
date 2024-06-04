class ItsMe {
  constructor () {
    this.name = '인티저';
    this.age = 29;
    this.home = '대전';
  }

  sentence() {
    return this.name + '은 정수이다.';
  }
}

let itsMe = new ItsMe();

console.log(itsMe);
console.log(itsMe.sentence());
class WorkTwo {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }

  set a(value) {
    if(typeof(value)==='number'){
      return this._a = value;
    }
  }
}

let test = new WorkTwo('きっさま','야호');
console.log(test);
// * 논리연산자 &&(and)와 ||(or)
// * && 둘다 참일 경우에 true, || 둘중 하나만 참이여도 true

function workOne(a,b) {
  if(typeof(a) === 'number' && typeof(b) === 'number'){
    let local = a + b;
    return local;
  } else {
    console.error('매개변수 잘못 작성됨');
  }
};
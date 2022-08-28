const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = x => a => a * x;
const addX = x => a => a + x;

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

// 배열인자로 compose 함수
function fixedArgsCompose(fnArr) {
  return fnArr.reduce(
    function (prevFn, nextFn) {
      return function (value) {
        return nextFn(prevFn(value));
      };
    },
    function (k) {
      return k;
    }
  );
}
const formulaWithFixedArgsCompose = fixedArgsCompose([multiplyTwo, multiplyThree, addFour]);

// arguments, 나열형 인자로 함수 구조 유연하게 작성
function flexibleArgsCompose(...fnArr) {
  // const fnArr = Array.prototype.slice.call(arguments);
  return fnArr.reduce(
    function (prevFn, nextFn) {
      return function (...args) {
        // const args = Array.prototype.slice.call(arguments);
        return nextFn(prevFn(...args));
      };
    },
    function (k) {
      return k;
    }
  );
}
const formulaWithFlxibleArgsCompose = flexibleArgsCompose(multiplyTwo, multiplyThree, addFour);
// const formulaWithFlxibleArgsCompose = flexibleArgsCompose(multiplyX(2), multiplyX(3), addX(4));

const formulaWithoutCompose = addX(4)(multiplyX(3)(multiplyX(2)));

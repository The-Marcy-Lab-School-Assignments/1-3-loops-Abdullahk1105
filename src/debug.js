// Question 8
const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};
console.log(brokenLoop(1, 5));
console.log(brokenLoop(1, 10));
console.log(brokenLoop(0, 0));

// Question 9

const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let j = 0 ; j < 10; j++) {
      result += `-${i}${j}`;
    }
  }
  return result.slice(1);
};
console.log(brokenNested());


module.exports = {
  brokenLoop,
  brokenNested,
};

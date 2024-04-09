// Question 1

const loop0UpTo10 = () => {
for(let i = 0; i < 10; i++){
  console.log(i)
}
};

loop0UpTo10()

//  Question 2

const loop5to10 = () => {
  for(let i = 5; i <= 10; i++){
    console.log(i)
  }
};

loop5to10()

// Question 3

// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for(let i = 0;i < 10; i += 2){
    console.log(i)
  }
};
loopEvenNumbersUpTo10()

// Question 4

const countdown5to0 = () => {
  for (let i = 5; i >= 0; i--){
    console.log(i)
  }
};
countdown5to0()

// Question 5

const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++)
  console.log(i)
};
loopUpToNum(5)
loopUpToNum(15)


const fizzbuzz = () => {
  for(let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz")
    }else if (i % 3 === 0){
      console.log("fizz")
    }else if( i % 5 === 0){
      console.log("buzz")
    }else {
      console.log(i)
    }
  }

};

fizzbuzz()

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};

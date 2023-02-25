//My solution #2 (without sorting)
let repeatNumbers = (arr) => {
  let repNumArr = [];
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        num = arr[i];
        if (repNumArr.includes(num) === false) {
          repNumArr.push(num);
        }
      }
    }
  }
  return repNumArr;
};

//console.log(repeatNumbers([1, 3, 4, 3, 2, 1]));
console.log(repeatNumbers([1, 1, 1, 2]));

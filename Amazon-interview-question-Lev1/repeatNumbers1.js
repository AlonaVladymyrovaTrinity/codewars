//My solution #1 (with sorting)
let repeatNumbers = (arr) => {
  let repNum = 0;
  let repNumArr = [];
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && repNum !== arr[i - 1]) {
      repNumArr.push(arr[i + 1]);
    }
    repNum = arr[i + 1];
  }
  return repNumArr;
};

console.log(repeatNumbers([1, 3, 4, 3, 2, 1]));
//console.log(repeatNumbers([1, 1, 1, 2]));

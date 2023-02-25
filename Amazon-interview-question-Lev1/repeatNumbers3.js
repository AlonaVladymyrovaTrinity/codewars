//stupid, but working solution of my husband :D
let repeatNumbers = (arr) => {
  let repNumArr = [];
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        num++;
      }
    }
    if (num > 1 && repNumArr.length !== 0) {
      for (let k = 0; k < repNumArr.length; k++) {
        if (repNumArr.includes(arr[i]) === false) {
          repNumArr.push(arr[i]);
        }
      }
    } else if ((num = 1 && repNumArr.length === 0)) {
      repNumArr.push(arr[i]);
    }
  }
  return repNumArr;
};

console.log(repeatNumbers([1, 3, 4, 3, 2, 1]));
//console.log(repeatNumbers([1, 1, 1, 2]));

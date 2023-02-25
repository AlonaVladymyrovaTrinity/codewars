//My solution #3 (with Set)
let repeatNumbers = (arr) => {
  const entries = {};
  const repeatsNum = new Set();
  for (const num of arr) {
    if (!entries[num]) {
      entries[num] = 1;
    } else {
      repeatsNum.add(num);
    }
  }
  return Array.from(repeatsNum);
};

console.log(repeatNumbers([1, 3, 4, 3, 2, 1]));
//console.log(repeatNumbers([1, 1, 1, 2]));

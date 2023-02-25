function repeatNumbers(arr) {
  const countMap = new Map();
  const repeats = [];

  for (const num of arr) {
    if (countMap.has(num)) {
      if (!repeats.includes(num)) {
        repeats.push(num);
      }
    } else {
      countMap.set(num, 1);
    }
  }

  return repeats;
}

console.log(repeatNumbers([1, 3, 4, 3, 2, 1])); // expected output: [1,3]
//console.log(repeatNumbers([1,1,1,2])); // expected output: [1]
//console.log(repeatNumbers([1,2,3,4,5])); // expected output: []
//console.log(repeatNumbers([1,1,2,2,3,3])); // expected output: [1,2,3]

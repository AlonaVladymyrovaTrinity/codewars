//My solution #4
function repeatNumbers(arr) {
  const repeats = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !repeats.includes(arr[i])) {
        repeats.push(arr[i]);
      }
    }
  }

  return repeats;
}

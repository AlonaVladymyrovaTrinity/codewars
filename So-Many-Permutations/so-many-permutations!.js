function permutations(string) {
  if (string.length === 1) {
    return [string];
  }

  const result = [];

  for (let i = 0; i < string.length; i++) {
    const firstChar = string[i];
    const charsLeft = string.substring(0, i) + string.substring(i + 1);
    const innerPermutations = permutations(charsLeft);
    for (let j = 0; j < innerPermutations.length; j++) {
      result.push(firstChar + innerPermutations[j]);
    }
  }

  return Array.from(new Set(result));
}

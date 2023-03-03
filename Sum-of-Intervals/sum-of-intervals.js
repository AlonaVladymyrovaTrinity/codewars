function sumIntervals(intervals) {
  // Combine overlapping intervals
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let last = merged[merged.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      merged.push(intervals[i]);
    }
  }

  // Calculate the sum of the merged intervals
  let sum = 0;
  for (let i = 0; i < merged.length; i++) {
    sum += merged[i][1] - merged[i][0];
  }
  return sum;
}

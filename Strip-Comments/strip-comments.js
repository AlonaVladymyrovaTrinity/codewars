function solution(input, markers) {
  // Split the input into lines
  var lines = input.split("\n");

  // Remove the comments and trailing whitespace from each line
  for (var i = 0; i < lines.length; i++) {
    for (var j = 0; j < markers.length; j++) {
      var index = lines[i].indexOf(markers[j]);
      if (index >= 0) {
        lines[i] = lines[i].substring(0, index).trim();
        break;
      }
    }
  }

  // Join the lines back together
  return lines.join("\n");
}

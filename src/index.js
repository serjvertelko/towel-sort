
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  var result = [];
  for(var i = 0; i < matrix.length; i += 1) {
    if(i % 2 === 0) {
      for(var j = 0; j < matrix[i].length; j += 1) {
        result.push(matrix[i][j]);
      }
    } else {
      for(var k = matrix[i].length - 1; k >= 0; k -= 1) {
        result.push(matrix[i][k]);
      }
    }
  }
  return result;
};

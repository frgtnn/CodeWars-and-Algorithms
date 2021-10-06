numbers = [1, 2]

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

  result = squareSum(numbers)
  console.log(result)
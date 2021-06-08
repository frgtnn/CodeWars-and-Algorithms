function checkDivision(x) {
    if (x%3 == 0 && x%5 == 0) {
        return "FizzBuzz";
    }
    else if (x%3 == 0) {
        return "Fizz";
    } else if (x%5 == 0) {
        return "Buzz";
    }
}

for (let i = 0; i< 101; i++){
    result = checkDivision(i);
    console.log(i, result)
}
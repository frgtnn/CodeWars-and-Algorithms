function checkNumbers(x, y) {
    let product = x*y;
    if (product % 2 == 0) {
        return product + 5;
    }
    else {
        return false;
    }
}
result = checkNumbers(2, 2);
console.log(result)
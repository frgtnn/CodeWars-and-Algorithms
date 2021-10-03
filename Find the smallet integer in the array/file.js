args = [5, 2, 3, 10]

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

result = Math.min(...args)
console.log(result)
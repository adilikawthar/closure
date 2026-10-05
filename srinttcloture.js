var total = 0;
function sum(numbers) {

    for (var i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}
console.log(sum([2, 3, 4, 5]))
console.log(sum([2, 3, 4, 5]))

/////////because total outside the function
////////var total
/////// after function the variable 

// task 2


function makeAccount(initial) {
    var balance = initial;
    function withdraw(amount) {
        if (balance - amount >= 0) {
            balance = balance - amount;
            return "Here's your money: $" + amount;
        }
        return "Insufficient funds."
    }
    return withdraw;
}

const saferacc = makeAccount(100);
console.log(saferacc(100))
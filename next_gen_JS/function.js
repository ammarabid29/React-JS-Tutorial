// Function Declaration - loads at compile time
function execute() {
    console.log("Hello");
}
execute();

// Function Expression - loads at run time 
var execute = function name() {
    console.log("Bye");
}
execute();

// Arrow Function - it's a function expression
var execute = () => {
    console.log("Arror");
}
execute();

// rest operator - form an array of arguments
function find_sum(...numbers) {
    var sum = 0;
    for (let n of numbers) {
        sum = sum + n;
    }
    return sum;
}
sum = find_sum(10, 20, 30);
console.log(sum);

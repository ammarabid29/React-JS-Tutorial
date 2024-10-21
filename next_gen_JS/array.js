// spread ...  - retreive all values form array or object and insert in other
const arr = [1, 2, 3];
const new_arr = [...arr, 4];
console.log(new_arr);


// destructing - extract few values from array
var values = [10, 20, 30];
[first, , last] = values;
console.log(first);
console.log(last);
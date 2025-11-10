const arr = [1, 2, 3, 4, 5];

console.log(arr);

// pop() - scoate ultimul element din array si il returneaza
// shift() - scoate primul element din array si il returneaza

arr.push(6);
console.log(arr);

const popValue = arr.pop();
console.log(popValue);
console.log(arr);

console.log("Array displayed with simple for:");
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Metoda forEach nu returneaza niciodata nimic
console.log("Array displayed with forEach:");
arr.forEach(el => {
    console.log(el);
})

console.log("Array displayed with forEach + indexed:");
arr.forEach((el, index) => {
    console.log(index + ": " + el);
})

console.log("Array displayed with map:");
const mappedValues = arr.map((el, index) => {
    // console.log(el, index);
    return el * 2;
})
console.log(mappedValues);

// For of | For in
for (el of arr) {
    console.log(el);
}
for (el in arr) {
    console.log(el);
}
// var x = 5;
// let y = 6;
// const z = 7;
// console.log(x, y, z);

// x = 6;
// y = 7;
// z = 8;
// console.log(x, y, z);

testVariables(true);

function testVariables(param) {
        console.log(x);
    if (param === true) {
        var x = 5;
        let y = 6;
        const z = 7;
    }
    console.log(x, y, z);
}

// Arrow function - propriul lor context de executie
const testVariables2 = (param) => {
    console.log(x);
    if (param === true) {
        var x = 5;
        let y = 6;
        const z = 7;
    }
    console.log(x, y, z);
}

testVariables2(true);
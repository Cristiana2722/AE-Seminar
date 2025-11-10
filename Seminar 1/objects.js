const obj = {
    name: "Cristiana",
    greet: function() {
        // console.log("Hello, " + this.name + "!");
        console.log(`Hello, ${this.name}!`);
    },
    greet2: () => {
        // Cannot access this.name
        console.log("Hello, " + this.name + "!");
    }
}

obj.greet();

obj.name = "Ana";

obj.greet();
obj.greet2();

obj.greet = function() {
    console.log('My name is not Cristiana.')
}
obj.greet();
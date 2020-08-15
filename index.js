"use strict";
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = "hello";
var double = "hello";
var back = "hello";
var person = {
    name: {
        first: "Jack",
        last: "Smith",
    },
    age: 21,
};
var fruits = ["Apple", "Banana", "Grape"];
var book = ["business", 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.GRANDE;
console.log(CoffeeSize.SHORT);
var anything = true;
anything = "hello";
anything = ["Hello", 33, true];
var unionType = 10;
var unionTypes = [111, "String"];
var apple = "apple";
var clothSize = "Small";
var cloth = {
    color: "white",
    size: clothSize,
};
cloth.size = "Large";
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log("Hello");
}
var anotherAdd = add;
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = "hello";
unknownInput = 12;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === "string") {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error("this is an error"));

let hasValue = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = "hello";
let double: string = "hello";
let back: string = `hello`;

const person = {
  name: {
    first: "Jack",
    last: "Smith",
  },
  age: 21,
};

const fruits: string[] = ["Apple", "Banana", "Grape"];

const book: [string, number, boolean] = ["business", 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};

coffee.size = CoffeeSize.GRANDE;

console.log(CoffeeSize.SHORT);

let anything: any = true;
anything = "hello";
anything = ["Hello", 33, true];

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [111, "String"];

type ClothSize = "Small" | "Medium" | "Large";

const apple: "apple" = "apple";

let clothSize: ClothSize = "Small";

const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: clothSize,
};

cloth.size = "Large";

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function sayHello() {
  console.log("Hello");
}

const anotherAdd: (n1: number, n2: number) => number = add;

function doubleAndHandle(num: number, cb: (num: number) => void): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}

doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});

let unknownInput: unknown;
let anyInput: any;
let text: string;

unknownInput = "hello";
unknownInput = 12;
unknownInput = true;
text = anyInput;

if (typeof unknownInput === "string") {
  text = unknownInput;
}

function error(message: string): never {
  throw new Error(message);
}

console.log(error("this is an error"));

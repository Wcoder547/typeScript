let input: unknown = 10;

if (typeof input === "number") {
  console.log(input + 5);
} else {
  console.log("Not a number");
}

let value: any = "Hello";
value.toUpperCase();

value = 123;
value.toFixed(2);

value.callSomeMethod();

let example: unknown = "Hello";
if (typeof example === "string") {
  console.log(example.toUpperCase());
}

function getData(): unknown {
  return "Some data";
}

let data = getData();
// console.log(data.toUpperCase()); ❌

if (typeof data === "string") {
  console.log(data.toUpperCase()); // ✅ Safe
}

let a: any = 5;
let b: unknown = 5;

a = b; // ✅ OK
b = a; // ❌ Error: Type 'any' is not assignable to type 'unknown'.

let s: string;
s = a; // ✅ OK (but unsafe!)
// s = b; // ❌ Error: Type 'unknown' is not assignable to type 'string'.

s = b as string; // ✅ OK

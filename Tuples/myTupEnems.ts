console.log("hello world");

const user: (string | number | boolean)[] = ["firstUser", 123, true];

let tUser: [string, number, boolean];

tUser = ["hafiz", 131, true];

let rgb: [number, number, number] = [255, 255, 255];

type help = [number, string];
const newUser: help = [23, "hello"];

newUser[1] = "hello@gmail.com";
// newUser.push(true);

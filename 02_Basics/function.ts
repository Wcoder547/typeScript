//Function

function addTwo(num: number) {
  return num + 2;
}
let sum: number = addTwo(5);
console.log(sum);

function getUpper(val: string): string {
  let upper = val.toUpperCase();
  return `hello g ${upper}`;
  //   return 5; // give error
}
let returnFunc = getUpper("waseem");
console.log(returnFunc);

function signupUser(username: string, email: string, isLoggedIn: boolean) {}
signupUser("wcoder547", "w@w.com", false);

let loggedinUser = (
  username: string,
  password: number,
  googleAccount: boolean = false
): number => {
  return 12;
};

loggedinUser("wcoder547", 1122);

const getHello = (s: string): string => {
  return "";
};
getHello("s");

const Hero = ["fahad", "talha", "waseem"];
const count = [1, 2, 3, 4, 5, 6];
Hero.forEach((hero: string): string => {
  return `Hero :${hero}`;
});
count.forEach((val: number): number => {
  return val;
});

function consoleError(errMsg: string): void {
  console.log(`Error is :${errMsg}`);
  return;
}

function handleError(err: string): never {
  throw new Error(err);
}
export {};

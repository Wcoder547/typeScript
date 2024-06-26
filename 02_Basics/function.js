"use strict";
//Function
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
  return num + 2;
}
var sum = addTwo(5);
console.log(sum);
function getUpper(val) {
  var upper = val.toUpperCase();
  return "hello g ".concat(upper);
  //   return 5; // give error
}
var returnFunc = getUpper("waseem");
console.log(returnFunc);
function signupUser(username, email, isLoggedIn) {}
signupUser("wcoder547", "w@w.com", false);
var loggedinUser = function (username, password, googleAccount) {
  if (googleAccount === void 0) {
    googleAccount = false;
  }
  return 12;
};
loggedinUser("wcoder547", 1122);
var getHello = function (s) {
  return "";
};
getHello("s");
var Hero = ["fahad", "talha", "waseem"];
var count = [1, 2, 3, 4, 5, 6];
Hero.forEach(function (hero) {
  return "Hero :".concat(hero);
});
count.forEach(function (val) {
  return val;
});
function consoleError(errMsg) {
  console.log("Error is :".concat(errMsg));
  return;
}
function handleError(err) {
  throw new Error(err);
}

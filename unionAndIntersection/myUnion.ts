console.log("hello world");
let score: number | string | boolean = 33;
score = 44;
score = "55";
score = false;

type user = {
  name: string;
  id: string;
};

type admin = {
  userName: string;
  adminid: number;
};

let waseem: user | admin = { name: "waseem_akram", id: "123" };
waseem = { userName: "fahad iqbal ", adminid: 321 };

// function dbId(id: number | string): number | string {
//   //some complex Api calls
//   console.log(`The database Id is : ${id}`);
//   return 123;
// }

function dbId(id: number | string) {
  if (typeof id === "string") {
    return id.toLowerCase();
  }
  id.toLocaleString();
}

dbId("123");
dbId(123);
// dbId(false);

//Array

const data: number[] = [1, 2, 3, 4, 5, 6];
const data2: string[] = ["waseem", "fahad", "talha"];
const data3: (string | number | boolean)[] = ["waseem", 1, 2, true];

let pi: 3.14 = 3.14;
// pi = 3.145;

let seatAllotment: "aisle " | "middle" | "window";
seatAllotment = "window";
// seatAllotment = "crew";

type Status = "success" | "error" | "loading";

function handleStatus(status: Status) {
  if (status === "success") {
    console.log("Everything is OK!");
  } else if (status === "error") {
    console.log("Something went wrong.");
  } else {
    console.log("Loading...");
  }
}

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type EmployeeInfo = Person & Employee;

const emp: EmployeeInfo = {
  name: "Waseem",
  age: 21,
  employeeId: 1001,
  department: "IT",
};

console.log(emp);

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

console.log("hello world");
var score = 33;
score = 44;
score = "55";
score = false;
var waseem = { name: "waseem_akram", id: "123" };
waseem = { userName: "fahad iqbal ", adminid: 321 };
// function dbId(id: number | string): number | string {
//   //some complex Api calls
//   console.log(`The database Id is : ${id}`);
//   return 123;
// }
function dbId(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    id.toLocaleString();
}
dbId("123");
dbId(123);
// dbId(false);
//Array
var data = [1, 2, 3, 4, 5, 6];
var data2 = ["waseem", "fahad", "talha"];
var data3 = ["waseem", 1, 2, true];
var pi = 3.14;
// pi = 3.145;
var seatAllotment;
seatAllotment = "window";
// seatAllotment = "crew";

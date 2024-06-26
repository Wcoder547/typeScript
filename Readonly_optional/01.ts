console.log("hello world");

type dbData = {
  readonly _userid: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetailes?: boolean;
};

function createUser(user: dbData) {}
createUser({
  _userid: "123",
  name: "waseemakram",
  email: "mw@gmail.com",
  isActive: false,
});

let myUser: dbData = {
  _userid: "12",
  name: "h",
  email: "em@em",
  isActive: true,
};
createUser(myUser);
// myUser._userid='12'
// myUser.name = "fahad";

type cardNumber = {
  cardNumber: string;
};
type cardCVC = {
  cardCvc: string;
};
type cardDate = {
  carddate: string;
};
type cardFull = cardNumber &
  cardCVC &
  cardDate & {
    cvv: number;
  };

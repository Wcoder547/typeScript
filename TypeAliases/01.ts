console.log("waseem akram");

type user = {
  name: string;
  email: string;
  isActive: boolean;
};
type choco = {
  name: string;
  email: string;
  isFahadChoco: boolean;
};
function createUser(user: user): choco {
  return {
    name: "hafiz Fahad Iqbal",
    email: "fahad@fahad.com",
    isFahadChoco: true,
  };
}

createUser({ name: "waseemakram", email: "mw@wasim.pk", isActive: true });

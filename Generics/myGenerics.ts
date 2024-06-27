console.log("HELLO WORLD");

const score: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["waseem", "fahad", "talha"];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<type>(val: type): type {
  return val;
}
identityThree("ok");

function identityFour<T>(val: T): T {
  return val;
}

interface bottle {
  brand: string;
  type: number;
}

// identityFour<bottle>({});
interface database {
  connection: string;
  usernme: string;
  password: string;
}

function anotherFunction<T, U extends database>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}
// anotherFunction(3, {});

interface Quiz {
  name: string;
  type: string;
}
interface course {
  name: string;
  author: string;
  subject: string;
}

class sellAble<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
